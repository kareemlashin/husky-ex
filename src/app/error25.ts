export interface InterfaceErrors {
name: string
age: number
email?: string
address?: {
street: string
city: string
}
}

export function process(data: InterfaceErrors) {
var name = data.name
var age = data.age
debugger
if (data.email) {
console.log(data.email)
}
return { name, age }
}
