import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export function badImports() {
  const router = new Router(null as any, null as any, null as any, null as any, null as any)
  return router
}

export function throwError() {
  throw "string error instead of Error object"
}
