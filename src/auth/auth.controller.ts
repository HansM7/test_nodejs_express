import { Request, Response } from "express";
import { loginService, registerService } from "./auth.service";

export async function loginController(req: Request, res: Response) {
  const response = await loginService(req.body);

  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(401).json({ message: "Error in login" });
  }
}

export async function registerController(req: Request, res: Response) {
  const response = await registerService(req.body);

  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({ message: "Register failed" });
  }
}
