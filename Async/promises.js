let order = true
//orderToggle()

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout( ()=> {
        if(order) resolve("Your Order Is Ready!")
        else reject( Error("There is a problem with your order!"))
    }, 2000)
});

function orderToggle() {
    if(order) order = false
    else order = true
}

breakfastPromise
.then( val => console.log(val))
.catch( err => console.log(err))

console.log(breakfastPromise)

