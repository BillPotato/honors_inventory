require("dotenv").config()
import morgan from "morgan"
import express from "express"
import type { Request, Response } from "express"

const app = express()

// display POST requests' payload
morgan.token("body", (request: Request, response: Response) => {
	if (request.method == "POST") {
		return JSON.stringify(request.body)
	}
	return " "
})


app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

type Equipment = {
    equipment_type: string,
    room_name: string
}

// _______________ENDPOINTS_______________

app.get("/equipments", (req: Request, res: Response) => {
    const equipments: Equipment[] = [
        {
            equipment_type: "laptop",
            room_name: "HON3010"
        }
    ]
    res.status(200).json(equipments)
})




// _______________________________________


const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Honors Inventory backend running on port ${PORT}`)
    console.log("_____________LOG____________")
})
