import type { EquipmentType } from "../utils/interfaces"

interface Props {
  equipment: EquipmentType,
  onDelete: any,
  onChooseEdit: any
}
const EquipmentRow = (props: Props) => {
  const { equipment, onDelete, onChooseEdit } = props

  const handleDelete = () => {
    onDelete(equipment)
  }

  const handleChooseEdit = () => {
    onChooseEdit(equipment.id)
  }

  return (
    <>
      <td>{equipment.id}</td>            
      <td>{equipment.model}</td>            
      <td>{equipment.equipment_type}</td>            
      <td>
        <button
          className="edit-btn"
          onClick={handleChooseEdit}
        >Edit</button>
        <button
          className="delete-btn"
          onClick={handleDelete}
        >Delete</button>
      </td> 
    </>
  )
}

export default EquipmentRow