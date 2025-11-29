import { useEffect, useState } from "react"

interface Props {
  onCreate: any,
  buildingTypes: string[]
}

const LocationCreateFormRow = (props: Props) => {
  const { onCreate, buildingTypes } = props

  const [roomName, setRoomName] = useState<string>("")
  const [buildingType, setBuildingType] = useState<string>(buildingTypes[0])

  
  const handleCreate = () => {
    onCreate(roomName, buildingType)
    setRoomName("")
    setBuildingType(buildingTypes[0])
  }

  // fix empty initial type
  useEffect(() => {
    setBuildingType(buildingTypes[0])
  }, [buildingTypes])

  return (
    <tr>
      <td colSpan={3}>Add New Location:</td>
      <td>
        <input
          type="text"
          value={roomName}
          onChange={(e)=>setRoomName(e.target.value)}
          placeholder="Enter room name"
        />
      </td>
      <td>
        <select value={buildingType} onChange={(e)=>setBuildingType(e.target.value)}>
          {buildingTypes.map(type => 
            <option key={type}>{type}</option>
          )}
        </select>
      </td>
      <td>
        <button
          className="add-btn"
          onClick={handleCreate}
        >Add</button>
      </td>
    </tr>
  )
}

export default LocationCreateFormRow