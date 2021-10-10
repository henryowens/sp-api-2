import { Application, Request, Response } from 'express';

import { logEndpoint } from '../../utils/logger';
import { InfoController } from '../controllers/infoController';

export function Routes(app: Application) {
  const user = new InfoController();

  app
    .route('/info/:username')
    .get(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.getUserByUserName)
    )
    .put(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.updateUser)
    );

  app
    .route('/info')
    .get(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.getAllUsers)
    )
    .post(async (req: Request, res: Response) =>
      logEndpoint(req, res, user.createUser)
    );
}
