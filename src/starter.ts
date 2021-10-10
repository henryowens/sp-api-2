import { json, urlencoded } from 'body-parser';
import express, { Express } from 'express';

import { Routes as infoRoutes } from './api/routes/infoRoutes';
import { Routes as socialRoutes } from './api/routes/socialRoutes';
import { connectDB } from './config/db';

export async function buildApp(): Promise<Express> {
  // create express server
  const app = express();

  // body parser
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // mongoose setup
  connectDB();

  // routes
  await infoRoutes(app);
  await socialRoutes(app);

  return Promise.resolve(app);
}
