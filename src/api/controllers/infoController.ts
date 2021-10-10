import { Request, Response } from 'express';

import { InfoModel } from '../models/infoModel';

export class InfoController {
  public async getAllUsers(_req: Request, res: Response) {
    await InfoModel.find({}, (err, infos) => {
      if (err) {
        res.send(err);
      }
      res.json(infos);
    });
  }

  public async getUserByUserName(req: Request, res: Response) {
    await InfoModel.find({ username: req.params.username }, (err, info) => {
      if (err) {
        res.send(err);
      }
      res.json(info);
    });
  }

  public async createUser(req: Request, res: Response) {
    const newUser = new InfoModel(req.body);
    newUser.save((err, info) => {
      if (err) {
        res.send(err);
      }
      res.json(info);
    });
  }

  public async updateUser(req: Request, res: Response) {
    InfoModel.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true },
      (err, info) => {
        if (err) {
          res.send(err);
        }
        res.json(info);
      }
    );
  }
}
