export class Error98 {
method(){
const p1=fetch("/a")
const p2=fetch("/b")
const p3=fetch("/c")
const p4=fetch("/d")
p1.then(r1=>{
p2.then(r2=>{
p3.then(r3=>{
p4.then(r4=>{
console.log(r1,r2,r3,r4)
})
})
})
})
}
}
