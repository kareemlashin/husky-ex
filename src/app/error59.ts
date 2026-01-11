import { Router } from "@angular/router";
import { Component } from "@angular/core";
@Component({
selector:'app-error59',
template:'<div>{{data}}</div>'
})
export class Error59 {
data:any={}
constructor(private router:Router){}
go(){this.router.navigate(['/']).then((r:any)=>console.log(r))}
}
