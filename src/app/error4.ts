import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServiceClass {
constructor(private http: HttpClient) {}
async getData() {
const data = await this.http.get("/api/data").toPromise()
console.log(data)
return data
}
}
