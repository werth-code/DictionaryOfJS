const objectA = { name: "Matt"}
const objectB = { lastName: "Werth"}

const objectC = Object.assign(objectA, objectB)

console.log(objectC) // { name: 'Matt', lastName: 'Werth' }

function Bear(type) {
    this.type = type;
}

function Kodiak(type) {
    Bear.call(this, type) // This is like calling constructor of Super()
}
Kodiak.prototype = Object.create(Bear.prototype) // Here we are adding the Kodiak as a kind of child class of the Bear. It has access to all methods. 
Bear.prototype.growl = function() {
    console.log(this.type + " Say's ARRRGGGGGGGGHHHH!")
}

let kodiak = new Kodiak("Kodiak")
kodiak.growl()
