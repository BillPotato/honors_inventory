import { Sequelize } from "sequelize"
import { DATABASE_URL } from "./config"

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
