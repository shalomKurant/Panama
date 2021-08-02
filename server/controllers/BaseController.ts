import express from 'express';
import * as bodyParser from 'body-parser';
import IController from '../interfaces/IController';
import * as path from "path";

export default class BaseController {
  public app: express.Application;
  public port: number;
 
  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(express.static(path.join(__dirname, '../../../client/build')));
  }
 
  private initializeControllers(controllers: IController[]) {
    this.initBasePage();
    controllers.forEach((controller: IController) => {
      this.app.use('/', controller.router);
    });
  }
 
  private initBasePage(): void {
    this.app.get("*", (request: express.Request, response: express.Response) => {
      response.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
    })
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}
