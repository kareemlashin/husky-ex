import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
selector: 'app-test',
template: '<div>Test</div>'
})
export class TestComponent {
unused: string = "value"
constructor(private router: Router, private http: HttpClient) {}
onClick() {
console.log("clicked")
var data = { name: "test" }
return data
}
}
