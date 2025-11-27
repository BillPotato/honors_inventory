require("dotenv").config()
import cors from "cors"
import morgan from "morgan"
import express from "express"
import { Sequelize, Model, DataTypes } from "sequelize"
import type { Request, Response } from "express"

const app = express()

// _______________SETUP_______________

// connect to SQL db & check connection
const sequelize = new Sequelize(process.env.DATABASE_URL)
console.log("Database URL: ", process.env.DATABASE_URL)

const testDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("db conectin success")
    } catch (e) {
        console.log("!!! DB CONNECTION ERROR !!!\n\n\n", e)
    }
}
testDb()

// morgan token for request payload
morgan.token("body", (request: Request, response: Response) => {
	if (request.method == "POST") {
		return JSON.stringify(request.body)
	}
	return " "
})

// use middlewares
app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"))

// define data types
// TODO: put into separate modules
class Equipment extends Model {}

Equipment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    model: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    equipment_type: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "equipment",
})
// create table if not exist
Equipment.sync()

// _______________ENDPOINTS_______________
// TODO: put into routers


app.get("/api/equipment", async (req: Request, res: Response) => {
    const equipment = await Equipment.findAll()
    res.status(200).json(equipment)
})

app.post("/api/equipment", async (req: Request, res: Response) => {
    const equipment = await Equipment.create(req.body)
    res.status(201).json(equipment)
})

app.put("/api/equipment/:id", async (req: Request, res: Response) => {
    const equipment = await Equipment.findByPk(req.params.id)
    if (equipment) {
        const updated = await equipment.update({ ...req.body })
        await equipment.save()
        res.json(updated)
    } else {
        res.status(404).end()
    }
})

// ______________ERROR HANDLERS_________

const errorHandler = (error: any, req: Request, res: Response, next: any) => {
    if (error.name === "SequelizeValidationError") {
        res.status(400).json({ error: "Invalid object structure" })
    }

    next(error)
}
app.use(errorHandler)

// _______________DRIVER_________________


const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Honors Inventory backend running on port ${PORT}`)
    console.log("_____________LOG____________")
})
