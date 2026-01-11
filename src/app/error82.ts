import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class Error82 {
u1:string
u2:number
u3:boolean
constructor(private http:HttpClient){}
get():any{return this.http.get("/api")}
}
