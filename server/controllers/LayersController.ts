import * as express from 'express';
import IController from '../interfaces/IController';
import { dataBaseConnector } from '../services/DataBaseConnector';
 
export class LayersController implements IController {
  public path = '/addLayerDescription';
  public router = express.Router();
 
  private layers: any[] = [
    {
      id: "ID_LAYER",
      description: "DESCRIPTION_LAYER"
    }
  ];
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.layers);
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    const post: any = request.body;
    const connector = dataBaseConnector
    console.log(post);
    this.layers.push(post);
    response.send(post);
  }
}