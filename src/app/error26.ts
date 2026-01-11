export class ArrowFunctionErrors {
method1() {
[1, 2, 3].map(function(item) {
return item * 2
})
}

method2() {
setTimeout(function() {
console.log("timeout")
}, 1000)
}
}
