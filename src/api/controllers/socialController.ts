import { Request, Response } from "express";
import { CustomRequest } from "../../utils/misc";

import { Social, SocialModel } from "../models/social.Model";

export class SocialController {
  public async getSocialByUserName(req: CustomRequest<Social>, res: Response) {
    await SocialModel.find({ username: req.params.username }, (err, social) => {
      if (err) {
        res.send(err);
      }

      const socials = social[0];
      console.log("socials", socials);

      res.json([
        {
          name: "whatsapp",
          username: socials.whatsapp.username,
          id: socials.whatsapp.id,
          url: socials.whatsapp.url,
        },
        {
          name: "facebook",
          username: socials.facebook.username,
          id: socials.facebook.id,
          url: socials.facebook.url,
        },
      ]);
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
