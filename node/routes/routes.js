import express from "express";
import {
  createBlog,
  getAllUsers,
  getVlogs,
  updateBlog,
  deleteBlog
} from "../controllers/BlogConstrollers.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getVlogs);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
