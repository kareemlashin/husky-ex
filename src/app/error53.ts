export function error53(){
async function bad(){
const r=fetch("/api")
r.then(x=>x.json()).then(y=>console.log(y))
}
return bad()
}
