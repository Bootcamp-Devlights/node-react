import { DataTypes } from "sequelize";
import db from "../db.js";

const User = db.define("User", {
  "id": {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  "name": {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
     len: {
      args: [3, 50],
      msg: "No es un nombre valido"
     }
    }
  },
  "email": {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
     isEmail: {
      msg: "No es un email valido"
     }
    }
  },
  "lastName": DataTypes.STRING,
  "address": DataTypes.STRING,
})

export default User;