const MongoClient = require('mongodb').MongoClient;
import mongodb from "mongodb";
export interface IDataBaseConnector {
  get(query: any): Promise<void>;
  insert(object: any): Promise<void>;
} 

class DataBaseConnector {
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

    public async get(query: any): Promise<void> {
      const items = await this.collection.find(query).toArray();
      return items;
    }

    public async insert(object: any): Promise<void> {
      await this.collection.insertOne(object);
    }

    public async delete(query: any): Promise<void> {
      await this.collection.deleteOne(query);
    }

    public close() {
      console.log("CONNECTION CLOSE");
      this.client.close();
    }
}

const dataBaseConnector = new DataBaseConnector();
export {dataBaseConnector}