export class MissingSemicolons {
private prop1: string = "value1"
private prop2: number = 42

method1() {
const x = 1
const y = 2
return x + y
}

method2(param: string) {
if (param) {
return param.toUpperCase()
} else {
return ""
}
}
}
