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
 
const flattenedCustomerNames = customerNames.reduce((arr, name) => [...arr, ...name],[])
console.log(flattenedCustomerNames)