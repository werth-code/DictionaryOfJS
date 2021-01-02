/////////// Chaining Methods ///////////
// Here we transform the string numbers to numbers, filter <= 3 and sum with reduce.

const numbers = ["1","2","3","4","5"];
const result = numbers
    .map( str => parseInt(str, 10))
    .filter(num => num <= 3)
    .reduce((total, num) => total + num, 0)

console.log(result)


/////////// Chaining Methods 2 ///////////
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012]

const displayYears = years
  .filter(year => year > 2000)
  .map(year => year + " A.D.")

console.log(displayYears)


/////////// Chaining Methods 3 ///////////

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 32},
  {name: 'Beatrice', age: 42}
];

const samir = users.filter(nameObj => nameObj.name !== "Samir")
console.log(samir)

const ages = users.map(per => `${per.name} is ${per.age} years old!`)
console.log(ages)
 
const usersObject = users.reduce( (usersObj, user) => {
    usersObj[user.name] = user.age;
    return usersObj;     //You always have to return with reduce so it will keep adding!
}, {});

console.log(usersObject)


/////////// Chaining Methods 4 ///////////

const authors = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Lewis", lastName: "Carroll" }
];

let fullAuthorNames = authors.map(author => `${author.firstName} ${author.lastName}`)
console.log(fullAuthorNames)


/////////// Chaining Methods 6 ///////////

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const namesObject = userNames   
    .filter(name => name.charAt(0) === "S")
    .map(name => ({ name: name}) )

console.log(namesObject)

/////////// Chaining Methods 6 ///////////

const user01 = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

const olderUsers = user01
    .filter(user => user.age > 30)
    .map(user => ({ name: user.name, age: user.age }))

    console.log(olderUsers)

    /////////// Chaining Methods 7 ///////////

    const todos = [
    {
        todo: 'Buy apples',
        done: false
    },
    {
        todo: 'Wash car',
        done: true
    },
    {
        todo: 'Write web app',
        done: false
    },
    {
        todo: 'Read MDN page on JavaScript arrays',
        done: true
    },
    {
        todo: 'Call mom',
        done: false
    }
];

const unfinishedTasks = todos
  .filter(task => task.done === false)
  .map(task => task.todo)

  console.log(unfinishedTasks)

      /////////// Chaining Methods 8 ///////////

const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

const rightPrice = products
    .filter(product => product.price < 10)
    .reduce((highest, product) => {
        if(highest.price > product.price) return highest
        return product
    })

console.log(rightPrice)
