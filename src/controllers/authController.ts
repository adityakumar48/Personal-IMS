import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { OTPFunction } from "../services/OTPFunction";

import { sendEmail } from "../services/EmailService";
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const otp = OTPFunction();
console.log("OTP:- ", otp);

const user = {
  id: 1,
  email: "adityakumarverified@gmail.com",
};

export const login = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    sendEmail(email, otp, name);
    res.status(200).json({ otp: otp });
  } catch (error) {
    res.send(error);
  }
};

export const verifyOTP = async (req: Request, res: Response) => {
  const { otp } = req.body;

  if (!otp) {
    return res.status(401).send("Please enter OTP");
  }

  if (otp !== otp) {
    return res.status(401).send("OTP not verified");
  }

  // Verified

  if (otp === otp) {
    await jwt.sign(
      { user },
      JWT_SECRET,
      { algorithm: "HS256", expiresIn: "300s" },
      (err: any, token: any) => {
        res.json({
          token,
        });
      }
    );
  }
};

export const register = async (req: Request, res: Response) => {
  res.send("register");
};
