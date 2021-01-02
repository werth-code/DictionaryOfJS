// Creating A Class Constructor With Getter/Setter

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity() {
    const today = new Date();
    const hour = today.getHours();

    if(hour > 8 && hour <= 20) return "Playing";
    else return "Sleeping";
  }

  get owner() {
    return this._owner;
  }

  //setters always receive one param - in this case owners name
  //setter name CANNOT BE THE SAME AS PARAM!!!!
  set owner(owner) {
    this._owner = owner;
    console.log(`Owner Setter has been called: ${owner}`)
  }
  
  speak() {
    console.log(this.sound);
  }
  
} 
////////////////////
class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNumber = phone.replace(/[^0-9]/g, "")
    this._phone = phoneNumber;
  }

  get phone() {
    return this._phone;
  }
}


const bear = new Pet("Bear", 2, "Black & Tan Germanhound", "Woof!")
bear.owner = new Owner("Matt", "103 E Sutton Pl")

bear.owner.phone = "(215)-490-4853"

console.log(bear.owner) 