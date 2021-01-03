const fruits = ["apple", "pear", "cherry"]

//////////// subString() & charAt() ////////////

fruits.forEach(ele => {
    console.log(ele.charAt(0).toUpperCase() + ele.substring(1).toLowerCase())
})

////////////////// You Can Get index W/ index... ////////////////////
fruits.forEach( (name, index) => console.log(`${index}) ${name}`) )