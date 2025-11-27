import type { EquipmentType } from "../utils/interfaces"
import Equipment from "./Equipment"

interface Props {
  equipments: EquipmentType[],
  onDelete: any
}

const EquipmentTable = (props: Props) => {
  const { equipments, onDelete } = props
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
    </tbody>
  </table>
  )
}

export default EquipmentTable