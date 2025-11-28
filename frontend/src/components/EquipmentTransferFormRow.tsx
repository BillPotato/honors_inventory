import { useMemo, useState } from "react"
import type { LocationType, EquipmentType } from "../utils/interfaces"

interface Props {
  locations: LocationType[]
  onTransfer: (equipmentId: number, toLocationId: number) => void
}

// used ai for this component

const EquipmentTransferFormRow = ({ locations, onTransfer }: Props) => {
  // flatten equipments
  const equipments: EquipmentType[] = useMemo(() => {
    return locations.flatMap(l => l.equipment ?? [])
  }, [locations])

  const [selectedEquipmentId, setSelectedEquipmentId] = useState<number>(equipments[0]?.id ?? -1)
  const [selectedLocationId, setSelectedLocationId] = useState<number>(locations[0]?.id ?? -1)

  // keep defaults in sync when lists change
  if (selectedEquipmentId === -1 && equipments[0]) setSelectedEquipmentId(equipments[0].id)
  if (selectedLocationId === -1 && locations[0]) setSelectedLocationId(locations[0].id)

  const handleTransfer = () => {
    if (selectedEquipmentId === -1 || selectedLocationId === -1) return
    onTransfer(selectedEquipmentId, selectedLocationId)
    // reset selection to first options if available
    setSelectedEquipmentId(equipments[0]?.id ?? -1)
    setSelectedLocationId(locations[0]?.id ?? -1)
  }

  return (
    <tr className="form-row">
      <td colSpan={3}>Transfer Equipment:</td>
      <td>
        <select value={selectedEquipmentId} onChange={(e) => setSelectedEquipmentId(Number(e.target.value))}>
          {equipments.map(eq => (
            <option key={eq.id} value={eq.id}>{`${eq.id} — ${eq.model}`}</option>
          ))}
        </select>
      </td>
      <td>
        <select value={selectedLocationId} onChange={(e) => setSelectedLocationId(Number(e.target.value))}>
          {locations.map(loc => (
            <option key={loc.id} value={loc.id}>{loc.room_name}</option>
          ))}
        </select>
      </td>
      <td>
        <button type="button" className="transfer-btn" onClick={handleTransfer}>Transfer</button>
      </td>
    </tr>
  )
}

export default EquipmentTransferFormRow
