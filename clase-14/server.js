import express from "express"
import cors from "cors"
import config from "./config.js";
import models from "./models/index.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api", apiRoutes);


models.sync({ force: true }).then((sequelize) => {
  app.listen(config.SERVER_PORT);
})