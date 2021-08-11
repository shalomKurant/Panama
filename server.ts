import BaseController from './server/controllers/BaseController';
import {LayersController} from './server/controllers/LayersController';
import { dataBaseConnector } from './server/services/DataBaseConnector';
 
const app = new BaseController (
  [
    new LayersController(),
  ],
  5000,
);
 
process.stdin.resume();//so the program will not close instantly

function exitHandler(options: any, exitCode: any) {
    dataBaseConnector.close();
    if (options.cleanup) console.log('clean');
    if (exitCode || exitCode === 0) console.log(exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
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