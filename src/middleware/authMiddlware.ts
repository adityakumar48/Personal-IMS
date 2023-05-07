import { Request, Response, NextFunction } from "express";

type AuthRequest = Request & { token?: any };

export const verifyToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): any => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearerToken = bearerHeader.split(" ")[1];
      const token = bearerToken;
      req.token = token;
      next();
    } else {
      res.status(401).json({
        message: "Token is Not Valid",
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Token is Not Valid" });
  }
};
