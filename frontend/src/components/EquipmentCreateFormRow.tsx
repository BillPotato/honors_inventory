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
    <tr>
      <td></td>
      <td></td>
      <td></td>
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
          onClick={handleCreate}
        >add</button>
      </td>
    </tr>
  )
}

export default EquipmentCreateRowForm