import { useState } from "react"

interface Props {
  onCreate: any
}

const EquipmentCreateRowForm = (props: Props) => {
  const { onCreate } = props

  const [model, setModel] = useState<string>("")
  const [type, setType] = useState<string>("")

  const handleCreate = () => {
    onCreate(model, type)
    setModel("")
    setType("")
  }

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
        <input
          type="text"
          value={type}
          onChange={(e)=>setType(e.target.value)}
          placeholder="Enter equipment type"
        />
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