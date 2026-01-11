export class ComplexErrors {
private data: any = {}
constructor() {
this.data.name = "test"
this.data.value = 42
}

process() {
const result = this.data!.name
const value = this.data!.value
console.log(result, value)
return { result, value }
}

badMethod(param: any): any {
if (param) {
return param.toString()
}
throw "error string"
}
}
