import express from "express";
// import { upload } from "./publication.controller";
import { validateToken } from "../auth/auth.middleware";
import { createPublicationController } from "./publication.controller";
const publicationRouter = express.Router();

const prefix = "/publications";

publicationRouter.post(
  `${prefix}`,
  // validateToken,
  // upload.single("file"),
  createPublicationController
);

export default publicationRouter;
