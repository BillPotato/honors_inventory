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

  const onEquipmentCreate = (model: string, type: string, locationId: number) => {
    const equipmentToCreate = {
      model: model,
      equipment_type: type,
      locationId: locationId
    }
    equipmentServices
      .create(equipmentToCreate)
      .then(newEquipment => setLocations(locations.map(location => 
        location.id == locationId ? { ...location, equipment: location.equipment.concat(newEquipment) } : location
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
      />
    </>
  )
}

export default App
