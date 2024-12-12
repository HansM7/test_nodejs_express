import path from "path";
import multer from "multer";
import { Request, Response } from "express";
import prisma from "../prisma/prisma.config";
import { envConfig } from "../config/env.config";
import jwt from "jsonwebtoken";

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: async (req, file, cb) => {
//     const token = String(req.headers.authorization?.split(" ")[1]);
//     const { id } = jwt.verify(token, envConfig.JWT_SECRET) as any;

//     const data = req.body;

//     console.log(data);

//     const pathName = `${id}.png`;

//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
//   },
// });

// export const upload = multer({ storage });

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

export async function createPublicationController(
  request: Request,
  response: Response
) {
  upload.single("file")(request, response, async () => {
    const data = request.body;

    console.log(request.file);
  });
}
