import equipmentRouter from "./controllers/equipment"
import locationRouter from "./controllers/location"
import { Request, Response } from "express"
import { PORT } from "./utils/config"
import { testDb } from "./utils/db"
import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express()

// _______________SETUP_______________

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


// _______________ENDPOINTS_______________
// TODO: put into routers

app.use("/api/equipment", equipmentRouter)
app.use("/api/locations", locationRouter)


// ______________ERROR HANDLERS_________

const errorHandler = (error: any, req: Request, res: Response, next: any) => {
    if (error.name === "SequelizeValidationError") {
        res.status(400).json({ error: "Invalid object structure" })
    }

    next(error)
}
app.use(errorHandler)

// _______________DRIVER_________________

app.listen(PORT, async () => {
    testDb()
	console.log(`Honors Inventory backend running on port ${PORT}`)
    console.log("_____________LOG____________")
})
