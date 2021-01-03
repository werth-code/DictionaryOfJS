//////// Map ////////
// transform your data

const numbers = ["1","2","3","4","5"];
console.log( numbers.map( str => 100 * parseInt(str, 10)) )

const fruits = ["apple", "pear", "cherry"]
console.log(fruits.map(ele => ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase()))

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const displayPrices = prices.map(price => `$${price.toFixed(2)}`)
console.log(displayPrices)


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays;

abbreviatedDays = daysOfWeek.map(days => days.substring(0, 3))
console.log(abbreviatedDays)