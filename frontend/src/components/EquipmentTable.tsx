import type { Equipment } from "../utils/interfaces"

interface Props {
  equipments: Equipment[]
}

const EquipmentTable = (props: Props) => {
  const { equipments } = props
  
  return (
  <table>
    <thead>
      <tr> 
        <th>Equipment Type</th>
        <th>Room Number</th>
      </tr>
    </thead>
    <tbody>
      {equipments.map(eq => 
        <tr key={eq.room_name}>
          <td>{eq.equipment_type}</td>            
          <td>{eq.room_name}</td>            
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default EquipmentTable