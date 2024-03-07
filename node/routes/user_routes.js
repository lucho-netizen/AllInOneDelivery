import express from "express";
import {
  createUser,
  getAllUsers,
  getUsers,
  updateUser,
  deleteUser
} from "../controllers/UserControllers.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
