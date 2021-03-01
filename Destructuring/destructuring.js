function Person(name, age, street, city, state) {
    this.name = name
    this.age = age
    this.address = {
      street,
      city,
      state
    }
}

const linda = new Person("Linda", 35, "103 E Sutton PL", "Wilmington", "DE")
const todd = new Person("Todd", 34, "13 West Street", "Middletown", "DE")
const mark = new Person("Mark", 32, "10 Arch Street", "Philadelphia", "PA")

const { address: {city} } = todd // Simple destructuring to get data from an object.
const { address: {state} } = mark

console.log(state)
console.log(city)

const personArr = [linda, todd, mark]

function destruct(per) {    // Creating a function to destructure address in our person object.
  const {address: {city, state}} = per
  return [city, state]
}

const allCitiesAndStates = []

personArr.forEach(per => allCitiesAndStates.push(destruct(per)))

console.log(allCitiesAndStates)