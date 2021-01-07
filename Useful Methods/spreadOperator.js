arr1 = [1,2,3]
arr2 = [3,4,5]

arr3 = [...arr1, ...arr2] // Can add multiple arrays or values.
arr4 = ["Candy", ...arr1, ...arr2, "Cupcake"]

console.log(arr3)
console.log(arr4)

console.log(" --- --- --- --- ")

const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

const flatMovies = movies.reduce((array, innerMovies) => [...array, ...innerMovies], [])
console.log(flatMovies)

//////////// 

const customerNames = [
    [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
    [ "Barry", "Wanda", "Jamal", "Hayden" ],
    [ "Portia", "Pam", "Philip" ]
];
 
const flattenedCustomerNames = customerNames.reduce( (arr, name) => [...arr, ...name],[] )
console.log(flattenedCustomerNames)