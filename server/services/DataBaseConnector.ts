const MongoClient = require('mongodb').MongoClient;

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

    public async get(): Promise<void> {
      const items = await this.collection.find({}).toArray();
      console.log(items);
      
      const myobj = { name: "Company Inc", address: "Highway 37" };
      await this.collection.insertOne(myobj);
    }

    public async insert(): Promise<void> {
      const myobj = { name: "Company Inc", address: "Highway 37" };
      await this.collection.insertOne(myobj);
    }

    public close() {
      console.log("CONNECTION CLOSE");
      this.client.close();
    }
}

const dataBaseConnector = new DataBaseConnector();
export {dataBaseConnector}