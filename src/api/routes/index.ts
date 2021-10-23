import { Request, Response, Router } from "express";

import { Routes as infoRoutes } from "./infoRoutes";
import { Routes as socialRoutes } from "./socialRoutes";

export function fallbackRoute(router: Router) {
  router.all("*", (req: Request, res: Response) =>
    res.status(404).json({
      message: `Not Found ${req.baseUrl}`,
    })
  );
}
export function routes(): Router {
  const router = Router();
  infoRoutes(router);
  socialRoutes(router);
  fallbackRoute(router);
  return router;
}
