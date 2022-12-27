const sequelize = require("sequelize");

const db = new sequelize.Sequelize('sqlite::memory:');

module.exports = db;