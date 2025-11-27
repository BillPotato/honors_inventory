require("dotenv").config()
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { Sequelize, QueryTypes } from "sequelize"
import type { Request, Response } from "express"

const app = express()

// _______________SETUP_______________

// connect to SQL db
const sequelize = new Sequelize(process.env.DATABASE_URL)
console.log("Database URL: ", process.env.DATABASE_URL)

const testDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("db conectin success")
    } catch (e) {
        console.log("DB CONNECTION ERROR\n\n\n", e)
    }
}
testDb()

// use middlewares

// morgan token for request payload
morgan.token("body", (request: Request, response: Response) => {
	if (request.method == "POST") {
		return JSON.stringify(request.body)
	}
	return " "
})

app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

// define data types

type Equipment = {
    equipment_type: string,
    room_name: string
}

// _______________ENDPOINTS_______________


app.get("/api/equipments", async (req: Request, res: Response) => {
    const equipments = await sequelize.query("SELECT * FROM equipments",
        { type: QueryTypes.SELECT }
    )
    res.status(200).json(equipments)
})


// _______________________________________


const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Honors Inventory backend running on port ${PORT}`)
    console.log("_____________LOG____________")
})
