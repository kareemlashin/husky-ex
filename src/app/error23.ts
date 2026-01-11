export function quoteErrors() {
const single = "should be single"
const double = "also wrong"
const template = `template string`
console.log(single, double, template)
return { single, double, template }
}
