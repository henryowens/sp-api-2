import { Server } from "http";
import { buildApp } from "./starter";

let server: Server;

function runApp() {
  const app = buildApp();
  const port = process.env.PORT || 8080;
  server = app.listen(port, () => {
    console.log(`\n HTTP server is running: http://localhost:${port}`);
  });
}

runApp();
