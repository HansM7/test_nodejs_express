import express from "express";
import { envConfig } from "./config/env.config";
import authRouter from "./auth/auth.route";
import publicationRouter from "./publication/publication.route";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const globalPrefix = "/api";

app.use(globalPrefix, authRouter);
app.use(globalPrefix, publicationRouter);

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
