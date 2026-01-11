export class FormattingIssues {
private   prop1:   string   =   "value1"
public    prop2:   number   =   42
protected prop3:   boolean  =   true

method1(   param1: string,param2: number   ){
  const   result   =   param1   +   param2.toString()
  if   (   result.length   >   5   )   {
    return   result
  }   else   {
    return   ""
  }
}
}
