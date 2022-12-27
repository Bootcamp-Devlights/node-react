const { DataTypes } = require('sequelize')
const db = require("./index");

const carsModel = db.define("Cars", {
  // pk: {
  //   primaryKey: true,
  //   autoIncrement: true,
  //   type: DataTypes.INTEGER
  // },
  marca: DataTypes.STRING,
  modelo: DataTypes.STRING,
  año: DataTypes.INTEGER
})

module.exports = carsModel;
