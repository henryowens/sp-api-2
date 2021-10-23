import { Request, Response } from "express";
import { CustomRequest } from "../../utils/misc";

import { InfoModel, Info } from "../models/infoModel";

export class InfoController {
  // create
  public async createUser(req: CustomRequest<Info>, res: Response) {
    const newUser = new InfoModel({ ...req.body });

    newUser.save((err, info) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(info);
    });
  }

  // read
  public async getUserByUserName(req: Request, res: Response) {
    await InfoModel.find({ username: req.params.username }, (err, info) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(info);
    });
  }

  // update
  public async updateUser(req: Request, res: Response) {
    InfoModel.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true },
      (err, info) => {
        if (err) {
          res.send(err);
        }
        res.status(200).json(info);
      }
    );
  }

  // delete
  public async deleteUser(req: Request, res: Response) {
    InfoModel.remove({ username: req.params.username }, (err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json({ message: "User successfully deleted" });
    });
  }
}
