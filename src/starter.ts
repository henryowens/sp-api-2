import { json, urlencoded } from "body-parser";
import express from "express";

import { routes } from "./api/routes";
import { connectDB } from "./config/db";

export function buildApp() {
  // create express server
  const app = express();

  // body parser
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // mongoose setup
  connectDB();

  // routes
  app.use("/api", routes());

  return app;
}
