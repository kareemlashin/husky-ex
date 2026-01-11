export interface BadInterface {
  name: string;
  age: number;
}

export function processUser(user: BadInterface) {
var username = user.name
var userage = user.age
debugger;
return {
  username: username,
  age: userage
}
}
