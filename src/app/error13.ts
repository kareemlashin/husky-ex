export function asyncErrors() {
async function badAsync() {
const response = fetch('/api/data')
response.then(r => r.json()).then(d => console.log(d))
}

async function anotherBad() {
return await Promise.resolve("value")
}

return badAsync()
}
