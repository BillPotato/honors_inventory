import { Model, DataTypes } from "sequelize"
import { sequelize } from "../utils/db"


// define data types
class Equipment extends Model {}

// TODO: change equipment_type to real type
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

export default Equipment