import type { EquipmentType } from "../utils/interfaces"
import Equipment from "./Equipment"
import EquipmentForm from "./EquipmentForm"

interface Props {
  equipments: EquipmentType[],
  locationId: number,
  onDelete: any,
  onCreate: any
}

const EquipmentTable = (props: Props) => {
  const { equipments, onDelete, onCreate, locationId } = props
  // console.log("equipments:", equipments)

  
  return (
  <table>
    <thead>
      <tr> 
        <th>Id</th>
        <th>Model</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {equipments.map(eq =>
        <Equipment
          key={eq.id}
          equipment={eq}
          onDelete={onDelete}
        />
      )}
      <EquipmentForm
        locationId={locationId}
        onSubmit={onCreate}
      />      
    </tbody>
  </table>
  )
}

export default EquipmentTable