import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

export class BadClass {
private name: string;
constructor() {
this.name = "test"
}
public getData(): any {
return { data: this.name }
}
}
