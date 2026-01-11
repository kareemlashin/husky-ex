export class TypeErrors {
method1(param: any): any {
return param
}

method2(): any {
return { data: "test" }
}

process(value: any) {
if (value) {
return value.toString()
}
return null
}
}
