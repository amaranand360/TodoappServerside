import express from "express";
import {
  deleteTask,
  getMyTask,
  newTask,
  updateTask,
  editTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);

router.get("/my", isAuthenticated, getMyTask);

router.route("/:id/edit").put(isAuthenticated,editTask);

router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;