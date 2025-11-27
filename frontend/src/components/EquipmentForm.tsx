import { useState } from "react"

interface Props {
    locationId: number,
    onSubmit: any
}

const EquipmentForm = (props: Props) => {
    const [model, setModel] = useState<string>("")
    const [type, setType] = useState<string>("")

    const { onSubmit, locationId } = props

    const handleSubmit = (event: any) => {
        onSubmit(model, type, locationId)
        setModel("")
        setType("")
    }

    return (
        <tr>
            <td> * </td>
            <td>
                <input
                    type="text"
                    value={model}
                    onChange={(e)=>setModel(e.target.value)}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                />
            </td>
            <td>
                <button
                    onClick={handleSubmit}
                >add</button>
            </td>
        </tr>
    )
}

export default EquipmentForm