import express from "express";
import {
  usersList,
  userById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secret";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/authMiddlware";

// User CRUD

router.post("/dashboard", verifyToken, async (req, res) => {
  try {
    // @ts-ignore
    await jwt.verify(req.token, JWT_SECRET, (err: any, authData: any) => {
      if (err) {
        res.status(403).json({ message: "Token is not valid" });
      } else {
        res.json({
          message: "Post created...",
          authData,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Token is not valid" });
  }
});

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
