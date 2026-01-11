export function error93(){
async function f1(){
const r=fetch("/a1")
r.then(x=>console.log(x))
}
async function f2(){
const r=fetch("/a2")
r.then(x=>console.log(x))
}
async function f3(){
const r=fetch("/a3")
r.then(x=>console.log(x))
}
return {f1,f2,f3}
}
