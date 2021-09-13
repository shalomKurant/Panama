import { ILayer } from "../../client/common/interfaces/ILayer";

const MongoClient = require('mongodb').MongoClient;

export interface IDataBaseConnector {
  get(query: any): Promise<ILayer[]>;
  insert(object: any): Promise<void>;
  delete(query: any): Promise<void>;
  update(findQuery: any, newValue: any): Promise<void>;
} 

class DataBaseConnector implements IDataBaseConnector {
  private client: any;
  private collection: any;
  private CONNECTION_URL = "mongodb://localhost:27017/";
  private readonly DB_NAME = "EXTRA_DATA";
  private readonly COLLECTION_NAME = "description"
    constructor() {
        this.connect();
    }

    private async connect(): Promise<void> {
      try {
        this.client = await MongoClient.connect(this.CONNECTION_URL, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        const db = this.client.db(this.DB_NAME);
        this.collection = db.collection(this.COLLECTION_NAME);
      } catch (error) {
        console.error(error);
      }
    }

    public async get(query: any): Promise<ILayer[]> {
      return await this.collection.find(query).toArray();
    }

    public async insert(object: any): Promise<void> {
      await this.collection.insertOne(object);
    }

    public async delete(query: any): Promise<void> {
      await this.collection.deleteOne(query);
    }

    public async update(findQuery: any, newValue: any): Promise<void> {
      await this.collection.updateOne(findQuery, newValue, { upsert: true });
    }

    public close() {
      console.log("CONNECTION CLOSE");
      this.client.close();
    }
}

const dataBaseConnector = new DataBaseConnector();
export {dataBaseConnector}