export function returnErrors() {
async function badReturn() {
return await Promise.resolve("value")
}

function another() {
return Promise.resolve("value").then(v => {
return v
})
}

return badReturn()
}
