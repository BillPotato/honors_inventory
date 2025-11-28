import { useEffect, useState } from "react"

interface Props {
  locationId: number,
  equipmentId: number,
  onEdit: any
}

const EquipmentEditFormRow = (props: Props) => {
  const { onEdit, locationId, equipmentId } = props
  const [model, setModel] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [currentEquipmentId, setCurrentEquipmentId] = useState<number>(equipmentId)
  
  useEffect(() => setCurrentEquipmentId(equipmentId), [equipmentId])


  const handleSubmit = () => {
    onEdit(currentEquipmentId, model, type, locationId)
    setModel("")
    setType("")
  }
  if (currentEquipmentId === -1) return
  return (
    <>
      <td>{currentEquipmentId === -1 ? "*" : currentEquipmentId}</td>
      <td>
        <input
          type="text"
          value={model}
          onChange={(e)=>setModel(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          value={type}
          onChange={(e)=>setType(e.target.value)}
        />
        </td>
        <td>
          <button
            onClick={handleSubmit}
          >edit</button>
          <button
            onClick={()=>setCurrentEquipmentId(-1)}
          >cancel</button>
        </td>
    </>
    )
}

export default EquipmentEditFormRow