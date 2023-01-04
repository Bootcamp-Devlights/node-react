import { Router } from "express"
import userRoutes from "./users.js";

const apiRoutes = Router();

apiRoutes.use("/users", userRoutes);

export default apiRoutes;