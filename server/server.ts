import { buildApp } from "../src/starter";

const app = buildApp();
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`App listening at port ${port}`);
