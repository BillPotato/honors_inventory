import type { EquipmentType } from "../utils/interfaces"

interface Props {
    equipment: EquipmentType,
    onDelete: any
}
const Equipment = (props: Props) => {
    const { equipment, onDelete } = props

    const handleDelete = (event: any) => {
        onDelete(equipment)
    }

    return (
        <>
            <tr>
            <td>{equipment.id}</td>            
            <td>{equipment.model}</td>            
            <td>{equipment.equipment_type}</td>            
            <td>
                <button
                    onClick={handleDelete}
                >delete</button>
            </td> 
            </tr>
        </>
    )
}

export default Equipment