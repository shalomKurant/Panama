import * as express from 'express';
import IController from '../interfaces/IController';
import { dataBaseConnector, IDataBaseConnector } from '../services/DataBaseConnector';
 
export class LayersController implements IController {
  public path = '/addLayerDescription';
  public router = express.Router();
  private readonly DBconnector: IDataBaseConnector;
 
  constructor() {
    this.DBconnector = dataBaseConnector;
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  private getAllPosts = async (request: express.Request, response: express.Response) => {
    try {
      const items = await this.DBconnector.get({});
      response.status(200).send(items);
    } catch (error) {
      response.status(400).send(error);
    }
  }
 
  private createAPost = async (request: express.Request, response: express.Response) => {
    const layer: any = request.body;
    try {
      await this.DBconnector.insert(layer);
      response.status(200).send(layer);
    } catch (error) {
      response.status(400).send(error);
    }
  }

  private createAPost = async (request: express.Request, response: express.Response) => {
    const layer: any = request.body;
    try {
      await this.DBconnector.insert(layer);
      response.status(200).send(layer);
    } catch (error) {
      response.status(400).send(error);
    }
  }
}