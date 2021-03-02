const arr =[1, 2, 3, 4, 5, 6, 7, 8, 8, 9]
const arr2 = []

function firstRepeatingBruteForce(arr) { // this is slow solution 0(n2) 

    try {
    if(arr.length === 0) throw new Error('Argument Is An Empty Array.')
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) return arr[i]
        }
    }
    return "No Repeating Chars"

    } catch(error) {
        console.error(error)
    }
}

//console.log(firstRepeatingBruteForce(arr))

// find the first repeating number in unsorted array
// return as number
// return -1 for empty array || not found

// x nest for loops - loop through each and return if the inner loop matches the outer loop
// create an obj{} 
// loop through array and assign arr[i] to the key of our {} and the value as 1.
// if (obj[key]) return arr[i]
// else return -1 

function firstRepeatingChar(arr) {
    try {
        if(arr.length === 0) throw new Error("Array Length Is 0")
        const obj = {}

        for(let char of arr) {
            if(obj[char] === 1) return char
            else {
                obj[char] = 1
            }
        }

        return -1

    } catch(e) {
        console.error(e)
    }
}

console.log(firstRepeatingChar(arr))