import { useEffect, useState } from "react"

interface Props {
  locationId: number,
  equipmentId: number,
  equipmentTypes: string[],
  onCancel: any,
  onEdit: any
}

const EquipmentEditFormRow = (props: Props) => {
  const { onEdit, onCancel, locationId, equipmentId, equipmentTypes } = props
  const [model, setModel] = useState<string>("")
  const [type, setType] = useState<string>("")

  const handleCancel = () => {
    onCancel()
  }

  const currentEquipmentId = equipmentId

  const handleSubmit = () => {
    onEdit(currentEquipmentId, model, type, locationId)
    setModel("")
    setType("")
  }

  // fix empty initial type
  useEffect(() => {
    setType(equipmentTypes[0])
  }, [equipmentTypes])

  if (currentEquipmentId === -1) return
  return (
    <>
      <td>{currentEquipmentId === -1 ? "*" : currentEquipmentId}</td>
      <td>
        <input
          type="text"
          value={model}
          onChange={(e)=>setModel(e.target.value)}
          placeholder="Enter model name"
        />
      </td>
      <td>
        {/* <input
          type="text"
          value={type}
          onChange={(e)=>setType(e.target.value)}
          placeholder="Enter equipment type"
        /> */}
        <select value={type} onChange={(e)=>setType(e.target.value)}>
            {equipmentTypes.map(type =>
                <option key={type}>{type}</option>
            )}
        </select>
        </td>
        <td>
          <button
            className="edit-btn"
            onClick={handleSubmit}
          >Save</button>
          <button
            className="cancel-btn"
            onClick={handleCancel}
          >Cancel</button>
        </td>
    </>
    )
}

export default EquipmentEditFormRow