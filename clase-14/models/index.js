import { Sequelize } from "sequelize";
import config from "../config.js";

const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  dialect: "mysql",
  port: config.DB_PORT,
  dialectOptions: {
    // Your mysql2 options here
  },
});

export default sequelize;

// const modelDefiners = [
// 	import('./user').then(module => module.default),
// 	import('./task').then(module => module.default),
// 	import('./role').then(module => module.default),
// 	// Add more models here...
// 	// require('./item'),
// ];

// // We define all models according to their files.

// async function define() {
//   for (const modelDefiner of modelDefiners) {
//     await modelDefiner(sequelize);
//   }
// }

// function applyExtraSetup(sequelize) {
// 	const { task, role, user } = sequelize.models;

//   console.log(sequelize.models)

// 	user.hasMany(task);
//   user.belongsToMany(role, { through: "RolesUsers" });

//   task.belongsTo(user);
//   role.belongsToMany(user, { through: "RolesUsers" });
// }

// define().then(() => {
//   applyExtraSetup(sequelize)
// });

// export default sequelize;