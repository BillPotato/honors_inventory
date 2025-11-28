import { useState, useEffect } from "react"
import EquipmentsTable from "./components/EquipmentsTable.tsx"
import type { EquipmentType, LocationType } from "./utils/interfaces.ts"
import equipmentServices from "./services/equipment.ts"
import locationServices from "./services/locations.ts"

function App() {
  const [locations, setLocations] = useState<LocationType[]>([]) 

  // handlers
  const onEquipentDelete = (equipmentToDelete: EquipmentType) => {
    if (!window.confirm(`Delete ${equipmentToDelete.model} ?`)) return
    equipmentServices
      .del(equipmentToDelete.id)
      .then(() => {
        // setEquipments(equipments.filter(eq => eq.id !== equipmentToDelete.id))
        const newLocations = locations.map(location => {
          return { ...location, equipment: location.equipment.filter(eq => eq.id !== equipmentToDelete.id) }
        })
        setLocations(newLocations)
      })
  }

  const onEquipmentCreate = (model: string, type: string) => {
    const equipmentToCreate = {
      model: model,
      equipment_type: type,
      locationId: 1
    }
    equipmentServices
      .create(equipmentToCreate)
      .then(newEquipment => setLocations(locations.map(loc=>
        loc.id === 1 ? { ...loc, equipment: loc.equipment.concat(newEquipment) } : loc
      )))
  }

  const onEquipmentEdit = (id: number, model: string, equipment_type: string, location_id: number) => {
    const equipmentToUpdate = {
        id,
        model,
        equipment_type,
        locationId: location_id
    }
    equipmentServices
        .put(id, equipmentToUpdate)
        .then((updatedEquipment) => setLocations(locations.map(loc => 
            loc.id !== location_id ? loc : { ...loc, equipment: loc.equipment.map(eq => 
                eq.id !== id ? eq : updatedEquipment
            )}
        )))
  }

  // AI wrote this function
  const onEquipmentTransfer = (equipmentId: number, toLocationId: number) => {
    equipmentServices.put(equipmentId, { locationId: toLocationId })
      .then((updatedEquipment) => {
        setLocations(prev => {
          // remove from old location and add to new location
          const originIndex = prev.findIndex(loc => loc.equipment.some(eq => eq.id === equipmentId))
          const originId = originIndex !== -1 ? prev[originIndex].id : undefined

          return prev.map(loc => {
            // if this is the origin, remove the equipment
            if (loc.id === originId) {
              return { ...loc, equipment: loc.equipment.filter(eq => eq.id !== equipmentId) }
            }
            // if this is the target, append the updated equipment
            if (loc.id === updatedEquipment.location_id || loc.id === toLocationId) {
              return { ...loc, equipment: loc.equipment.concat(updatedEquipment) }
            }
            return loc
          })
        })
      })
  }

  useEffect(()=>{
    locationServices
      .getAll()
      .then(initialLocations => {
        console.log("initial locations: ", initialLocations)
        setLocations(initialLocations)
      })
  }, [])

  return (
    <>
      <EquipmentsTable
        locations={locations}
        onEquipmentCreate={onEquipmentCreate}
        onEquipmentDelete={onEquipentDelete}
        onEquipmentEdit={onEquipmentEdit}
        onEquipmentTransfer={onEquipmentTransfer}
      />
    </>
  )
}

export default App
