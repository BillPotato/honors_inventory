import type { EquipmentType, LocationType } from "../utils/interfaces"
import Equipment from "./Equipment"
import EquipmentForm from "./EquipmentForm"

interface Props {
  location: LocationType,
  onDelete: any,
  onCreate: any
}

const EquipmentTable = (props: Props) => {
  const { location, onDelete, onCreate } = props
  const equipments = location.equipment
  // console.log("equipments:", equipments)

  
  return (
  <table>
    <thead>
      <tr> 
        <th>Location</th>
        <th>Type</th>
        <th>Id</th>
        <th>Model</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {equipments.map((eq: EquipmentType, idx: number) => (
        <tr key={eq.id}>
          {idx === 0 && (
            <>
              <td rowSpan={equipments.length}>{location.room_name}</td>
              <td rowSpan={equipments.length}>{location.building_type}</td>
            </>
          )}
          <Equipment
            equipment={eq}
            onDelete={onDelete}
          />
        </tr>
      ))}
      <tr>
        <td></td>
        <td></td>
        <EquipmentForm
          locationId={location.id}
          onSubmit={onCreate}
        />
      </tr>
    </tbody>
  </table>
  )
}

export default EquipmentTable