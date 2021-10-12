import { Request, Response, Router } from "express";

import { logEndpoint } from "../../utils/logger";
import { SocialController } from "../controllers/socialController";

export function Routes(router: Router) {
  const social = new SocialController();

  router
    .route("/social/:username")
    .get(async (req: Request, res: Response) =>
      logEndpoint(req, res, social.getSocialByUserName)
    );

  router
    .route("/social")
    .post(async (req: Request, res: Response) =>
      logEndpoint(req, res, social.createSocial)
    );
}
