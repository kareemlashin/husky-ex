export function error50(){
const obj:any={name:"test"}
const name=obj!.name
const value=obj?.value??null
return {name,value}
}
