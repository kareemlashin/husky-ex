export function complexErrors() {
  const obj: any = { name: "test", value: 123 }
  const result = obj!.name
  const value = obj?.value ?? null
  
  function innerFunc(param: any) {
    eval("console.log('bad')")
    return param
  }
  
  return innerFunc(result)
}
