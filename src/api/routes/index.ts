import { Router } from "express";

import { Routes as infoRoutes } from "./infoRoutes";
import { Routes as socialRoutes } from "./socialRoutes";

export function routes(): Router {
  const router = Router();
  infoRoutes(router);
  socialRoutes(router);
  return router;
}
