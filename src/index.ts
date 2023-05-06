import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🔥`);
});
