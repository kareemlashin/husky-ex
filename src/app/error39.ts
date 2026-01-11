import { Router } from "@angular/router";
export class Error39 {
constructor(private router:Router){}
navigate(){
this.router.navigate(["/"]).then((r:any)=>console.log(r))
}
}
