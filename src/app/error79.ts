import { Router } from "@angular/router";
import { Component } from "@angular/core";
@Component({
selector:'app-error79',
template:'<div>{{v1}} {{v2}}</div>'
})
export class Error79 {
v1:any={}
v2:any={}
constructor(private router:Router){}
n(){this.router.navigate(['/']).then((r:any)=>console.log(r))}
}
