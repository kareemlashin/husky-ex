import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class Error76 {
u1:string
u2:number
constructor(private http:HttpClient){}
async get(){
const d=await this.http.get("/api").toPromise()
console.log(d)
return d
}
}
