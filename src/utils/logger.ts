import { Request, Response } from 'express';

export const logEndpoint = async (
  req: Request,
  resp: Response,
  middleware?: (req: Request, resp: Response) => Promise<unknown>
) => {
  console.log(`${req.method} ${req.url}`);
  return await middleware(req, resp);
};
