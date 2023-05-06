import { Request, Response } from "express";

export const usersList = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Not Implemented" });
};

export const userById = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Not Implemented Id: - ${id}` });
};

export const createUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Not Implemented" });
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Not Implemented Id: - ${id}` });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Not Implemented Id: - ${id}` });
};
