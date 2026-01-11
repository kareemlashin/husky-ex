export class VarErrors {
method1() {
var x = 1
var y = 2
var z = x + y
return z
}

method2() {
for (var i = 0; i < 10; i++) {
console.log(i)
}
return i
}
}
