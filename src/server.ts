import { Server } from "http";
import { buildApp } from "./starter";

import serverless from "serverless-http";
import { Express } from "express";

let server: Server;

function runApp() {
  const app = buildApp();
  const port = process.env.PORT || 3000;
  server = app.listen(port, () => {
    console.log(`\n HTTP server is running: http://localhost:${port}`);
  });
}

const app: Express = buildApp();

module.exports.handler = serverless(app);
