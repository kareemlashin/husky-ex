export function error73(){
async function f1(){
const r=fetch("/api1")
r.then(x=>console.log(x))
}
async function f2(){
const r=fetch("/api2")
r.then(x=>console.log(x))
}
return {f1,f2}
}
