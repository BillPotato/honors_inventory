import { useState, useEffect } from "react"
import EquipmentTable from "./components/EquipmentTable.tsx"
import type { Equipment } from "./utils/interfaces.ts"


function App() {
  const [equipments, setEquipments] = useState<Equipment[]>([]) 

  useEffect(()=>{
    setEquipments(equipments.concat([
      {
        equipment_type: "laptop",
        room_name: "HON3010"
      }
    ]))
  }, [])

  return (
    <EquipmentTable equipments={equipments}/>
  )
}

export default App
