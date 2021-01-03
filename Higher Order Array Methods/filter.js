//////////// Filter /////////////
const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log( numbers.filter(num => num <= 5) )

const names = ["Adam", "Greg", "Sam", "Amanda", "Brett", "Sue", "Zoe", "Lexy"]
console.log( names.filter(name => name.charAt(0) === "S") )

// Create a custom filter function //
const startsWithA = name => name.charAt(0) === "A"
const aNames = names.filter(startsWithA)
console.log(aNames)

const no10 = numbers.filter(number => number !== 10)
console.log(no10)

const evens = numbers.filter(num => num % 2 === 0)
console.log(evens)