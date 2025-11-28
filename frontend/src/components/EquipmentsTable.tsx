import type { LocationType } from "../utils/interfaces"
import EquipmentTableRow from "./EquipmentTableRow"

interface Props {
  locations: LocationType[],
  onEquipmentDelete: any,
  onEquipmentCreate: any,
  onEquipmentEdit: any,
}

// TODO:
// add equipment edit
// add location add & edit & delete

const EquipmentsTable = (props: Props) => {
  const { locations, onEquipmentDelete, onEquipmentCreate, onEquipmentEdit } = props

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
          {locations.map(location => 
            <EquipmentTableRow
              key={location.id}
              location={location}
              onEquipmentDelete={onEquipmentDelete}
              onEquipmentCreate={onEquipmentCreate}
              onEquipmentEdit={onEquipmentEdit}
            />
          )}
      </tbody>
    </table>
  )
}

export default EquipmentsTable