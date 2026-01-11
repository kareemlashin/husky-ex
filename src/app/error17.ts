export function formattingIssues(   param1:   string   ,   param2:   number   )   {
const   result   =   param1   +   param2.toString()
if   (   result.length   >   10   )   {
return   result.toUpperCase()
}   else   {
return   result.toLowerCase()
}
}
