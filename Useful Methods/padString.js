const { ConsoleWriter } = require("istanbul-lib-report");

const string = 'this is a string with a lot of text that we will split and then join into new lines with a specific length'

// which direction do we justify if remaining spaces are uneven... 1 space remaining - left justify.

// split the string into an array of normalized words.
// create final lines array to later return
// create a current line to add - up to length
// loop through arr of normalized words 
// if currentLine length + currentWord < length add to currentLine
// if it is > ------- create a new function to handle length with proper spaces
// return the finalLines array.

function sentenceLength(string, lineLength) {
    if(string.length === 0 || lineLength <= 0) return [] // edge cases
    if(lineLength >= string.length) return [string]

    let finalLines = []

    const arr = string.split(" ");

    let currentLine = ''
    
    for(let i = 0; i < arr.length; i++) {

        if(arr[i].length > lineLength) return ["Not Possible To Justify"]

        if (currentLine.length + arr[i].length < lineLength) currentLine += arr[i] + " "
        else if(currentLine.length + arr[i].length === lineLength) currentLine += arr[i]
        else {
            finalLines.push(lineSpacer(currentLine, lineLength))
            currentLine = arr[i] + " "
        }
    }   
    finalLines.push(lineSpacer(currentLine, lineLength))
    return finalLines
}

// we take in the length and the current string
// we trim() to remove any additional spacing
// we get the length of lineString
// we divide by 2 if even

function lineSpacer(lineString, lineLength) {
    if(lineString >= lineLength) return lineString

    let startSpaces = 0
    let endSpaces = 0

    const trimmedLineString = lineString.trim() 

    const length = trimmedLineString.length

    if(length % 2 === 0) {
        startSpaces = (lineLength - length) / 2
        endSpaces = (lineLength - length) / 2
    } 
    else {
        startSpaces = Math.floor((lineLength - length) / 2) + 1
        endSpaces = Math.floor((lineLength - length) / 2)
    }

    return " ".repeat(startSpaces) + trimmedLineString + " ".repeat(endSpaces)
}

console.log(sentenceLength(string, 8))