const objectA = { name: "Matt"}
const objectB = { lastName: "Werth"}

const objectC = Object.assign(objectA, objectB)

console.log(objectC) // { name: 'Matt', lastName: 'Werth' }