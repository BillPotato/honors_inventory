import { useEffect, useState } from "react"

interface Props {
  locationId: number,
  equipmentId: number,
  onSubmit: any,
  onEdit: any
}

const EquipmentFormRow = (props: Props) => {
  const { onSubmit, onEdit, locationId, equipmentId } = props
  const [model, setModel] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [currentEquipmentId, setCurrentEquipmentId] = useState<number>(equipmentId)
  
  useEffect(() => setCurrentEquipmentId(equipmentId), [equipmentId])


  const handleSubmit = () => {
    if (currentEquipmentId === -1) {
      onSubmit(model, type, locationId)
    } else {
      onEdit(currentEquipmentId, model, type, locationId)
    }
    setModel("")
    setType("")
  }

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
          >{currentEquipmentId === -1 ? "add" : "edit"}</button>
          {currentEquipmentId !== -1 && 
            <button
              onClick={()=>setCurrentEquipmentId(-1)}
            >reset</button>
          }
        </td>
    </>
    )
}

export default EquipmentFormRow