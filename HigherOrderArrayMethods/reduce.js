////////////// Reduce ///////////////

const prices = [5, 4.23, 6.4, 8.09, 3.20]
//acc or accumulator is like acc += current for each element of loop.
const allPrices = prices.reduce( (accumulator, current) => accumulator + current, 0)
//the last 0 is where we begin the addition.. if we start at 10 we would get 36.92
console.log(allPrices)


const names = ["Adam", "Greg", "Linda", "Sam", "Amanda", "Brett", "Sue", "Zoe", "Lexy"]
const namesWithL = names.reduce((count, name) => {
    if(name[0] === "L") return count+1
    else return count
}, 0)
console.log(namesWithL)

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

numberOf503 = phoneNumbers.reduce((count, number) => {
  if(number.substring(0,5) === "(503)") return ++count
  else return count
}, 0)
