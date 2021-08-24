import { baseUrl } from "../constants/constants";

class HttpManager {
    constructor() {}

    public async get(url: string): Promise<any> {
        const response = await fetch(baseUrl + url, {
            headers: {
                "Content-type": "application/json"
            },
            method: "GET"
        });
        return await response.json();
    }

    public async post(url: string, body: any): Promise<any> {
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });
          return await response.json();
    }

    public async delete(url: string): Promise<any> {
        const response = await fetch(baseUrl + url, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
          return await response.json();
    }
}

const httpManager = new HttpManager();
export {httpManager}