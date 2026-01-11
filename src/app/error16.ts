import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServiceErrors {
unusedVar: string = "test"
constructor(private http: HttpClient) {}

async getData() {
const data = await this.http.get("/api/data").toPromise()
console.log(data)
return data
}

badMethod(param: any) {
return param
}
}
