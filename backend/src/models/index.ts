import Equipment from "./equipment"
import Location from "./location"

Location.hasMany(Equipment)
Equipment.belongsTo(Location)
Equipment.sync({ alter: true })
Location.sync({ alter: true })

export { Equipment, Location }