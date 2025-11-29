import { Sequelize } from "sequelize"
import { DATABASE_URL } from "./config"
import { Location } from "../models/index"

// connect to SQL db & check connection
export const sequelize = new Sequelize(DATABASE_URL,
    { dialect: "postgres" }
)
// console.log("Database URL: ", process.env.DATABASE_URL)

export const testDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("db conectin success")
    } catch (e) {
        console.log("!!! DB CONNECTION ERROR !!!\n\n\n", e)
    }
}
// create warehouse if not exist
export const createWarehouse = async () => {
  const locations = await Location.findAll()
  if (locations.length === 0) {
    await Location.create({ room_name: "WA1000", building_type: "Warehouse" })
  }
}
