import { useState, useEffect } from "react"
import EquipmentTable from "./components/EquipmentTable.tsx"
import type { EquipmentType } from "./utils/interfaces.ts"
import equipmentServices from "./services/equipment.ts"

function App() {
  const [equipments, setEquipments] = useState<EquipmentType[]>([]) 

  // handlers
  const onDelete = (equipmentToDelete: EquipmentType) => {
    if (!window.confirm(`Delete ${equipmentToDelete.model} ?`)) return
    equipmentServices
      .del(equipmentToDelete.id)
      .then(res => {
        setEquipments(equipments.filter(eq => eq.id !== equipmentToDelete.id))
      })
  }

  const onEquipmentCreate = (model: string, type: string, locationId: number) => {
    const equipmentToCreate = {
      model: model,
      equipment_type: type,
      location_id: locationId
    }
    equipmentServices
      .create(equipmentToCreate)
      .then(newEquipment => setEquipments(equipments.concat(newEquipment)))

  }

  useEffect(()=>{
    equipmentServices
      .getAll()
      .then(initialEquipments => {
        console.log("initial equipments: ", initialEquipments)
        setEquipments(initialEquipments)
      })
  }, [])

  return (
    <EquipmentTable
      equipments={equipments}
      locationId={3}
      onDelete={onDelete}
      onCreate={onEquipmentCreate}
    />
  )
}

export default App
