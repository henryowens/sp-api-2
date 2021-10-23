import serverless from "serverless-http";
import express from "express";
import { config } from "dotenv";
import { json, urlencoded } from "body-parser";

import { connectDB } from "./config/db";
import { routes } from "./api/routes";

// setting up env vars
config({ path: "./.env.local" });

// create express server
const app = express();

// body parser
app.use(json());
app.use(urlencoded({ extended: true }));

// mongoose setup
connectDB();

// routes
app.use("/.netlify/functions/server", routes()); // path must route to lambda

export default app;
module.exports = app;
module.exports.handler = serverless(app);
