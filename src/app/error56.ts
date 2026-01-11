import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class Error56 {
unusedProp:string
constructor(private http:HttpClient){}
async getData(){
const d=await this.http.get("/api").toPromise()
console.log(d)
return d
}
}
