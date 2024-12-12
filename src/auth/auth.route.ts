import express, { request } from "express";
import { validateFormLogin, validateFormRegister } from "./auth.middleware";
import { loginController, registerController } from "./auth.controller";
const authRouter = express.Router();

const prefix = "/auth";

authRouter.post(`${prefix}/login`, validateFormLogin, loginController);
authRouter.post(`${prefix}/register`, validateFormRegister, registerController);

export default authRouter;
