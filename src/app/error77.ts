export function error77(  a:  string  ,  b:  number  ,  c:  boolean  ,  d:  string  ){
const r=a+b.toString()+c.toString()+d
if(r.length>20){
return r.toUpperCase()
}else if(r.length>10){
return r.toLowerCase()
}else{
return r
}
}
