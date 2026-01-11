export class Error58 {
method(){
const p1=fetch("/api1")
const p2=fetch("/api2")
p1.then(r1=>r1.json()).then(d1=>{
p2.then(r2=>r2.json()).then(d2=>{
console.log(d1,d2)
})
})
}
}
