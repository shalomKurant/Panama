import BaseController from './server/controllers/BaseController';
import {LayersController} from './server/controllers/LayersController';
 
const app = new BaseController (
  [
    new LayersController(),
  ],
  5000,
);
 
app.listen();

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 5000;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/hello', (req: any, res: any) => {
//   res.send({ express: 'Hello From Express' });
// });
// app.post('/api/world', (req: any, res: any) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });
// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('*', function(req: any, res: any) {
//   console.log("FROM SERVER");
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));