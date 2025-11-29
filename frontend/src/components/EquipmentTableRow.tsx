import type { EquipmentType, LocationType } from "../utils/interfaces"
import EquipmentRow from "./EquipmentRow"
import EquipmentEditFormRow from "./EquipmentEditFormRow"
import { useState } from "react"

interface Props {
  location: LocationType,
  onEquipmentDelete: any,
  onEquipmentCreate: any,
  onEquipmentEdit: any,
}

const EquipmentTableRow = (props: Props) => {
  const [editing, setEditing] = useState<number>(-1) // id of equipment editing, -1 if not editing
  const { location, onEquipmentDelete, onEquipmentEdit } = props
  const equipments = location.equipment
  // console.log("equipments:", equipments)

  const onChooseEdit = (id: number) => {
    setEditing(id)
  }

  const onCancelEdit = () => {
    setEditing(-1)
  }

  return (
    <>
      {!equipments || !equipments.length
      ?
        <tr>
          <td className="empty-location">{location.room_name}</td>
          <td className="empty-location">{location.building_type}</td>
          <td className="empty-location" colSpan={4}>No equipment in this location</td>
        </tr>
      :
      equipments.map((eq: EquipmentType, idx: number) => (
        <tr key={eq.id}>
          {idx === 0 && (
            <>
              <td rowSpan={equipments.length}>{location.room_name}</td>
              <td rowSpan={equipments.length}>{location.building_type}</td>
            </>
          )}
          <EquipmentRow
            equipment={eq}
            onDelete={onEquipmentDelete}
            onChooseEdit={onChooseEdit}
          />
        </tr>
      ))}
      <tr>
        <td></td>
        <td></td>
        <EquipmentEditFormRow
          locationId={location.id}
          equipmentId={editing}
          onEdit={onEquipmentEdit}
          onCancel={onCancelEdit}
        />
      </tr>
    </>
  )
}

export default EquipmentTableRow