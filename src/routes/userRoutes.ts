import express from "express";
import {
  usersList,
  userById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

// User CRUD

// List users
router.get("/", usersList);

// user by one
router.post("/:id", userById);

// Create user
router.post("/", createUser);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;
