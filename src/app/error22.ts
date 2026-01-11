import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ImportErrors {
unused: Observable<any>
constructor(private http: HttpClient) {}
getData(): any {
const data = this.http.get("/api/data")
data.subscribe(result => console.log(result))
return data
}
}
