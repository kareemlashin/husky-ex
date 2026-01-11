import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Component({
selector:'app-error92',
template:'<div>Error92</div>'
})
export class Error92 {
u1:string
u2:number
u3:Observable<any>
constructor(private r:Router,private h:HttpClient){}
}
