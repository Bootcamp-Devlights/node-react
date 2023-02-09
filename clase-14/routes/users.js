import { Router } from "express";
import {
  createUser,
  createUserTask,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  getAllTasksByUserId,
  login
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:userId", getUserById);
userRoutes.post("/", createUser);
userRoutes.put("/:userId", updateUser);
userRoutes.delete("/:userId", deleteUser);
userRoutes.post("/:userId/task", createUserTask)
userRoutes.get("/:userId/tasks", getAllTasksByUserId)
userRoutes.post("/login", login)

export default userRoutes;
