import { useState, useEffect } from "react"
import EquipmentTable from "./components/EquipmentTable.tsx"
import type { EquipmentType, LocationType } from "./utils/interfaces.ts"
import equipmentServices from "./services/equipment.ts"
import locationServices from "./services/locations.ts"

function App() {
  const [locations, setLocations] = useState<LocationType[]>([]) 

  // handlers
  const onDelete = (equipmentToDelete: EquipmentType) => {
    if (!window.confirm(`Delete ${equipmentToDelete.model} ?`)) return
    equipmentServices
      .del(equipmentToDelete.id)
      .then(res => {
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
      <table>
        <thead>
          <tr> 
            <th>Location</th>
            <th>Type</th>
            <th>Id</th>
            <th>Model</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
            {locations.map(location => 
              <EquipmentTable
                key={location.id}
                location={location}
                onDelete={onDelete}
                onCreate={onEquipmentCreate}
              />
            )}
        </tbody>
      </table>
      
    </>
  )
}

export default App
