import { Router } from "express"
import userRoutes from "./users.js";
import rolesRoutes from "./roles.js";

const apiRoutes = Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/roles", rolesRoutes);

export default apiRoutes;