import * as express from 'express';
import { ILayer } from '../../client/common/interfaces/ILayer';
import IController from '../interfaces/IController';
import { dataBaseConnector, IDataBaseConnector } from '../services/DataBaseConnector';
 
export class LayersController implements IController {
  public path = '/layers';
  public getAllLayerPath = '/getAll';
  public addLayerPath = '/addLayerDescription';
  public editLayerPath = '/editLayerDescription';
  public deleteLayerPath = '/deleteLayerDescription/:layerId';
  public getLayerByIdPath = '/getLayerDescriptionById/:layerId';


  public router = express.Router();
  private readonly DBconnector: IDataBaseConnector;
 
  constructor() {
    this.DBconnector = dataBaseConnector;
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path + this.getAllLayerPath, this.getAllLayers);
    this.router.post(this.path + this.addLayerPath, this.createLayer);
    this.router.post(this.path + this.editLayerPath, this.editLayer);
    this.router.delete(this.path + this.deleteLayerPath, this.deleteLayer);
    this.router.delete(this.path + this.getLayerByIdPath, this.getLayerById);
  }
 
  private getAllLayers = async (request: express.Request, response: express.Response) => {
    try {
      const items: ILayer[] = await this.DBconnector.get({});
      response.status(200).send(items);
    } catch (error) {
      response.status(400).send(error);
    }
  }
 
  private createLayer = async (request: express.Request, response: express.Response) => {
    const {layerId, displayName, description}: any = request.body;
    try {
      await this.DBconnector.insert({layerId, displayName, description});
      response.status(200).send({layerId, displayName, description});
    } catch (error) {
      response.status(400).send(error);
    }
  }

  private deleteLayer = async (request: express.Request, response: express.Response) => {
    const {layerId} = request.body;
    try {
      await this.DBconnector.delete({layerId});
      response.status(200).send(layerId);
    } catch (error) {
      response.status(400).send(error);
    }
  }

  private editLayer = async (request: express.Request, response: express.Response) => {
    const {layerId, displayName, description} = request.body;
    try {
      const searchQuery = { layerId };
      const newValueQuery = { $set: {layerId, displayName, description} };
      await this.DBconnector.update(searchQuery, newValueQuery);
      response.status(200).send(newValueQuery);
    } catch (error) {
      response.status(400).send(error);
    }
  }

  private getLayerById = async (request: express.Request, response: express.Response) => {
    const {layerId} = request.body;
    try {
      await this.DBconnector.get({layerId});
      response.status(200).send(layerId);
    } catch (error) {
      response.status(400).send(error);
    }
  }
}