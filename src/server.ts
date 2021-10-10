import { Express } from 'express';

import { buildApp } from './starter';

buildApp().then((app: Express) => {
  const port = process.env.PORT || 8080;
  app.listen(port);
  console.log(`App listening at port ${port}`);
});
