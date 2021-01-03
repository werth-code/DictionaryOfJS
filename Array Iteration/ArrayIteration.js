//Ways To Loop Through An Array

////////////// Traditional Loop //////////////

const fruits = ["Apple", "Pear", "Cherry"]

const traditionalLoop = array => {
    for(let i = 0; i < fruits.length; i++) {
        console.log("Traditional: " + fruits[i]);
    }  
}
traditionalLoop(fruits);


////////////// For Of Loop //////////////

const forOfLoop = array => {
    for(fruit of fruits) {
        console.log("For Of: " + fruit);
    }
}
forOfLoop(fruits)

////////////// ForEach Loop //////////////

fruits.forEach(ele => console.log("ForEach: " + ele));

fruits.forEach(ele => {
    console.log(ele.substring(0).toLowerCase())
})

const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

numbers.forEach(num => times10.push((num * 10)))