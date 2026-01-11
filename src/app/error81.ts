export interface Error81 {
name:string
age:number
email:string
}

export function process(d:Error81){
var n=d.name
var a=d.age
var e=d.email
debugger
console.log(n,a,e)
return {n,a,e}
}
