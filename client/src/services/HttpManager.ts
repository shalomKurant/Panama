export default class HttpManager {
    constructor() {}

    public async get(): Promise<any> {
        const response = await fetch("url", {
            headers: {
                "Content-type": "application/json"
            },
            method: "GET"
        });
        return await response.json();
    }

    public async post(): Promise<any> {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
          });
          return await response.json();
    }
}