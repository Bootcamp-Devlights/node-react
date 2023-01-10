import { Router } from "express";
import {
  createRole,
  deleteRole,
  getAllRoles,
  getRoleById,
  updateRole
} from "../controllers/roles.js";

const roleRoutes = Router();

roleRoutes.get("/", getAllRoles);
roleRoutes.get("/:roleId", getRoleById);
roleRoutes.post("/", createRole);
roleRoutes.put("/:roleId", updateRole);
roleRoutes.delete("/:roleId", deleteRole);

export default roleRoutes;
