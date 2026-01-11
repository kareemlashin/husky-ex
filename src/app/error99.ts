import { Router } from "@angular/router";
import { Component } from "@angular/core";
@Component({
selector:'app-error99',
template:'<div>{{v1}} {{v2}} {{v3}}</div>'
})
export class Error99 {
v1:any={}
v2:any={}
v3:any={}
constructor(private router:Router){}
n(){this.router.navigate(['/']).then((r:any)=>console.log(r))}
}
