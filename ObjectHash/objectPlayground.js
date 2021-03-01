 //random hashing function

 function hash(key) {
    let hash = 0
    
    for(let i = 0; i < key.length; i++) {
        let char = key.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash |= 0
    }
    return hash
 }

 console.log(hash("Test the string"))