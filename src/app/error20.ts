export function evalErrors() {
const code = "console.log('bad')"
eval(code)

const obj: any = { name: "test" }
const value = obj!.name

return { code, value }
}
