import { Application, Request, Response } from 'express';

import { logEndpoint } from '../../utils/logger';
import { SocialController } from '../controllers/socialController';

export function Routes(app: Application) {
  const social = new SocialController();

  app
    .route('/social/:username')
    .get(async (req: Request, res: Response) =>
      logEndpoint(req, res, social.getSocialByUserName)
    );

  app
    .route('/social')
    .post(async (req: Request, res: Response) =>
      logEndpoint(req, res, social.createSocial)
    );
}
