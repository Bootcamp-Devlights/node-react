const express = require("express");
const carsRoutes = require("./cars");
const usersRoutes = require("./users");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/cars", carsRoutes);

module.exports = apiRoutes;