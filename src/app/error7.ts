export class PromiseErrors {
  async badPromise() {
    const data = fetch('/api/data')
    data.then(response => response.json()).then(json => console.log(json))
  }
  
  async anotherBad() {
    return await Promise.resolve("test")
  }
  
  methodWithAny(param: any): any {
    return param
  }
}
