import { json, urlencoded } from "body-parser";
import express from "express";

import { Routes as infoRoutes } from "./api/routes/infoRoutes";
import { Routes as socialRoutes } from "./api/routes/socialRoutes";
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
  infoRoutes(app);
  socialRoutes(app);

  return app;
}

