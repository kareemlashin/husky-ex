export class Error89 {
method(p:any){
try{
return p.toString()
}catch{
throw "catch1"
}finally{
console.log("finally")
}
}
}
