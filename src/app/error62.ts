import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class Error62 {
unused:number=0
constructor(private http:HttpClient){}
get():any{return this.http.get("/api")}
}
