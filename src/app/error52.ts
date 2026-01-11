import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
selector:'app-test',
template:'<div>Test</div>'
})
export class Error52 {
unused:string
constructor(private r:Router,private h:HttpClient){}
}
