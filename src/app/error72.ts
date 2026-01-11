import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Component({
selector:'app-error72',
template:'<div>Error72</div>'
})
export class Error72 {
unused1:string
unused2:number
constructor(private r:Router,private h:HttpClient){}
}
