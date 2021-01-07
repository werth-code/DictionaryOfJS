///// Prototypal Inheritance //////

function Parent(name, age) {  // Parent Class
    this.name = name;
    this.age = age;
}

Parent.prototype.speak = function() { // Function On Parent Prototype 
    console.log("I am " + this.name + ". I am " + this.age + " years old!" )
}

function Child(name, age) { //Child Class
    Parent.call(this, name, age) // This is how we call super() W/ Prototypal Inheritance.
}
Child.prototype = Object.create(Parent.prototype) //You have to set Child -> Parent with Object.create(Parent.prototype)

const adam = new Child("Adam", 6)
adam.speak()