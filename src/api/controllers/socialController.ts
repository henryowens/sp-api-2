import { Request, Response } from 'express';

import { SocialModel } from '../models/social.Model';

export class SocialController {
  public async getSocialByUserName(req: Request, res: Response) {
    await SocialModel.find({ username: req.params.username }, (err, social) => {
      if (err) {
        res.send(err);
      }
      res.json(social);
    });
  }

  public async createSocial(req: Request, res: Response) {
    const newSocial = new SocialModel(req.body);
    newSocial.save((err, social) => {
      if (err) {
        res.send(err);
      }
      res.json(social);
    });
  }
}
