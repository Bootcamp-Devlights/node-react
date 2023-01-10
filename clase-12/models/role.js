import { DataTypes } from "sequelize";
import db from "../db.js";

const Role = db.define("Role", {
  "id": {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  "name": {
    type: DataTypes.STRING,
    allowNull: false,
  },
  "descripcion": DataTypes.STRING,
})

export default Role;