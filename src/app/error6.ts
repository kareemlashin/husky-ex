import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-component',
  template: '<div>Test</div>'
})
export class MyComponent {
  unusedVar: string = "test";
  constructor(private router: Router) {}
  
  onClick() {
    this.router.navigate(['/path']).then((result:any) => {
      console.log(result)
    })
  }
}
