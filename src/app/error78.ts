export class Error78 {
method(){
const p1=fetch("/a")
const p2=fetch("/b")
const p3=fetch("/c")
p1.then(r1=>{
p2.then(r2=>{
p3.then(r3=>{
console.log(r1,r2,r3)
})
})
})
}
}
