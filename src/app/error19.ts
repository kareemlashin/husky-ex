import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
selector: 'app-bad',
template: '<div>{{data}}</div>'
})
export class BadComponent {
data: any = { name: "test" }
constructor(private router: Router) {}
navigate() {
this.router.navigate(['/path']).then((result: any) => {
console.log(result)
})
}
}
