import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class Error42 {
unused:string="test"
constructor(private http:HttpClient){}
getData():any{
return this.http.get("/api")
}
}
