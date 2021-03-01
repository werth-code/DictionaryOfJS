const { type } = require("os")
const { count } = require("yargs")

const arr2 = [1, 3, 5, 7, 9]
const arr1 = [2, 4, 6, 8]

function mergeSortedArray(arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0) return []
    if(arr1.length === 0) return arr2
    if(arr2.length === 0) return arr1

    const result = []
    const length = arr1.length + arr2.length

    let arrOneCount = 0    
    let arrTwoCount = 0    

    for(let i = 0; i < length; i++) {
        if(arr1[arrOneCount] === undefined) {
            result.push(arr2[arrTwoCount])
            arrTwoCount++
        } 
        else if(arr2[arrTwoCount] === undefined) {
            result.push(arr1[arrOneCount])
            arrOneCount++
        }

        else if(arr1[arrOneCount] < arr2[arrTwoCount]) {
            result.push(arr1[arrOneCount])
            arrOneCount++
        } 
        else {
            result.push(arr2[arrTwoCount])
            arrTwoCount++
        }
    }
    return result
}

console.log(mergeSortedArray(arr1, arr2))