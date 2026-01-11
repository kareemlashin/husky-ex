export function finalErrors() {
const obj: any = { name: "test", value: 123 }
const name = obj!.name
const value = obj?.value ?? null

function inner(param: any) {
eval("console.log(param)")
return param
}

async function badAsync() {
const data = fetch('/api/data')
data.then(r => r.json()).then(d => console.log(d))
}

return { name, value, inner, badAsync }
}
