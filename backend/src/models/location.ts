import { Model, DataTypes } from "sequelize"
import { sequelize } from "../utils/db"

class Location extends Model {}

Location.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    room_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    building_type: {
        type: DataTypes.ENUM(
            "Classroom", "Office", "Warehouse", "Lab", "Library",
            "Dorm", "DiningHall", "Others"
        ),
        allowNull: false
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "location"
})

export default Location