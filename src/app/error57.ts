export function error57(  p1:  string  ,  p2:  number  ,  p3:  boolean  ){
const r=p1+p2.toString()+p3.toString()
if(r.length>10){
return r.toUpperCase()
}
return r.toLowerCase()
}
