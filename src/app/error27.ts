import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
selector: 'app-error',
template: '<div>Error</div>'
})
export class ErrorComponent {
unusedProp: string = "test"
private _value: any = null

constructor(private router: Router) {}

get value(): any {
return this._value
}

set value(v: any) {
this._value = v
console.log(v)
}
}
