export interface Error41 {
name:string
age:number
}

export function process(data:Error41){
var n=data.name
var a=data.age
console.log(n,a)
return {n,a}
}
