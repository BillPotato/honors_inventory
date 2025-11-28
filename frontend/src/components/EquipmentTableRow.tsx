import type { EquipmentType, LocationType } from "../utils/interfaces"
import EquipmentRow from "./EquipmentRow"
import EquipmentFormRow from "./EquipmentFormRow"
import { useState } from "react"

interface Props {
  location: LocationType,
  onEquipmentDelete: any,
  onEquipmentCreate: any,
  onEquipmentEdit: any,
}

const EquipmentTableRow = (props: Props) => {
  const [editing, setEditing] = useState<number>(-1) // id of equipment editing, -1 if not editing
  const { location, onEquipmentDelete, onEquipmentCreate, onEquipmentEdit } = props
  const equipments = location.equipment
  // console.log("equipments:", equipments)

  const onChooseEdit = (id: number) => {
    setEditing(id)
  }

  return (
    <>
      {equipments.map((eq: EquipmentType, idx: number) => (
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
        <EquipmentFormRow
          locationId={location.id}
          equipmentId={editing}
          onSubmit={onEquipmentCreate}
          onEdit={onEquipmentEdit}
        />
      </tr>
    </>
  )
}

export default EquipmentTableRow