export class PromiseIssues {
badPromise1() {
const promise = fetch('/api/data')
promise.then(response => {
response.json().then(data => {
console.log(data)
})
})
}

badPromise2() {
return Promise.resolve("value").then(v => v)
}
}
