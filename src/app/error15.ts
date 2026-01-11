export interface BadInterface {
name: string
age: number
email?: string
}

export function processUser(user: BadInterface) {
var name = user.name
var age = user.age
debugger
console.log(name, age)
return { name, age }
}
