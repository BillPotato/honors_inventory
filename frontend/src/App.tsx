import { useState, useEffect } from "react"
import EquipmentTable from "./components/EquipmentTable.tsx"
import type { Equipment } from "./utils/interfaces.ts"
import equipmentServices from "./services/equipment.ts"

function App() {
  const [equipments, setEquipments] = useState<Equipment[]>([]) 

  useEffect(()=>{
    equipmentServices
      .getAll()
      .then(initialEquipments => {
        console.log("initial equipments: ", initialEquipments)
        setEquipments(initialEquipments)
      })
  }, [])

  return (
    <EquipmentTable equipments={equipments}/>
  )
}

export default App
