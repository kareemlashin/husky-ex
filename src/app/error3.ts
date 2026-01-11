export function messyFunction( param1:any,param2:any ) {
  const result=param1+param2
  if(result>10){
    return result*2
  }else{
    return result
  }
}
