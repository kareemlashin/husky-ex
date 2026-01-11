export function error97(  a:  string  ,  b:  number  ,  c:  boolean  ,  d:  string  ,  e:  number  ){
const r=a+b.toString()+c.toString()+d+e.toString()
if(r.length>30){
return r.toUpperCase()
}else if(r.length>20){
return r.toLowerCase()
}else if(r.length>10){
return r
}else{
return ""
}
}
