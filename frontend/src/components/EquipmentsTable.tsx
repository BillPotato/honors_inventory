import { useState } from "react"
import type { LocationType } from "../utils/interfaces"
import EquipmentCreateRowForm from "./EquipmentCreateFormRow"
import EquipmentTableRow from "./EquipmentTableRow"
import EquipmentTransferFormRow from "./EquipmentTransferFormRow"
import LocationCreateFormRow from "./LocationCreateFormRow"

interface Props {
  locations: LocationType[],
  onEquipmentDelete: any,
  onEquipmentCreate: any,
  onEquipmentEdit: any,
  onEquipmentTransfer: any,
  onEquipmentSortToggle: any,
  onCreateLocation: any,
  buildingTypes: string[],
  equipmentTypes: string[]
}

// TODO:
// add equipment edit
// add location add & edit & delete

const EquipmentsTable = (props: Props) => {
  const { locations, onEquipmentDelete, onEquipmentCreate, onEquipmentEdit, onEquipmentTransfer, onEquipmentSortToggle,
    onCreateLocation, buildingTypes, equipmentTypes
   } = props
  
  const [sorted, setSorted] = useState<boolean>(false)

  const handleSort = () => {
    onEquipmentSortToggle()
    setSorted(!sorted)
  }

  return (
    <table>
      <thead>
        <tr> 
          <th>Location</th>
          <th>Building Type</th>
          <th>
            
            Equipment ID
          </th>
          <th>
            <button
              onClick={handleSort}
            >{sorted?"Unsort":"Sort"} by</button>
          Model</th>
          <th>Equipment Type</th>
          <th>Actions</th>
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
              equipmentTypes={equipmentTypes}
            />
          )}
          <EquipmentCreateRowForm
            onCreate={onEquipmentCreate}
            equipmentTypes={equipmentTypes}
          />
          <EquipmentTransferFormRow
            locations={locations}
            onTransfer={onEquipmentTransfer}
          />
          <LocationCreateFormRow
            onCreate={onCreateLocation}
            buildingTypes={buildingTypes}
          />
      </tbody>
    </table>
  )
}

export default EquipmentsTable