import express from "express";

import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import cluster from "cluster";
import * as os from "os";

const cpuNums = os.cpus().length;
console.log("Cpu Cores:- ", cpuNums);

if (cluster.isPrimary) {
  for (let i = 0; i < cpuNums; i++) {
    cluster.fork();
  }

  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  const app = express();
  const PORT = 8000 || process.env.PORT;

  app.use(express.json());

  // Routes
  app.use("/users", userRoutes);
  app.use("/auth", authRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🔥`);
  });
}
