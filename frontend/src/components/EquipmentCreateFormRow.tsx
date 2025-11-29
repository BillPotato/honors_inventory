import { useState, useEffect } from "react"

interface Props {
  onCreate: any,
  equipmentTypes: string[]
}

const EquipmentCreateRowForm = (props: Props) => {
  const { onCreate, equipmentTypes } = props

  const [model, setModel] = useState<string>("")
  const [type, setType] = useState<string>(equipmentTypes[0])

  const handleCreate = () => {
    onCreate(model, type)
    setModel("")
    setType(equipmentTypes[0])
  }
 
  // fix empty initial type
  useEffect(() => {
    setType(equipmentTypes[0])
  }, [equipmentTypes])

  return (
    <tr className="form-row">
      <td colSpan={3}>Add New Equipment:</td>
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
          className="add-btn"
          onClick={handleCreate}
        >Add</button>
      </td>
    </tr>
  )
}

export default EquipmentCreateRowForm