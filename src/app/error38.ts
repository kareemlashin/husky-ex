export class Error38 {
method(){
const promise=fetch("/api")
promise.then(r=>r.json()).then(d=>console.log(d))
}
}
