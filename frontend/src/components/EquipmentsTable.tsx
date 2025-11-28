import type { LocationType } from "../utils/interfaces"
import EquipmentCreateRowForm from "./EquipmentCreateFormRow"
import EquipmentTableRow from "./EquipmentTableRow"
import EquipmentTransferFormRow from "./EquipmentTransferFormRow"

interface Props {
  locations: LocationType[],
  onEquipmentDelete: any,
  onEquipmentCreate: any,
  onEquipmentEdit: any,
  onEquipmentTransfer: any,
}

// TODO:
// add equipment edit
// add location add & edit & delete

const EquipmentsTable = (props: Props) => {
  const { locations, onEquipmentDelete, onEquipmentCreate, onEquipmentEdit, onEquipmentTransfer } = props

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
          <EquipmentCreateRowForm
            onCreate={onEquipmentCreate}
          />
          <EquipmentTransferFormRow
            locations={locations}
            onTransfer={onEquipmentTransfer}
          />
      </tbody>
    </table>
  )
}

export default EquipmentsTable