import Equipment from "./equipment"
import Location from "./location"

Location.hasMany(Equipment)
Equipment.belongsTo(Location)
Location.sync({ alter: true })
Equipment.sync({ alter: true })

export { Equipment, Location }