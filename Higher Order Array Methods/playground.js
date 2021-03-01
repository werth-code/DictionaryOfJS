const items = [
    {name: 'Matthew', birthday: 09211987, address: { number: 103,
                                                    street: "E Sutton Pl",
                                                    city: "Wilmington",
                                                    state: "DE",
                                                    zip: 19810}
                                                   },

    {name: 'Lauren', birthday: 11191987, address: { number: 223,
                                                    street: "West Green Street",
                                                    city: "Wilmington",
                                                    state: "DE",
                                                    zip: 19810}
                                                   }

]

const laurenStreet = items.filter(person => person.address.street === "West Green Street")

laurenStreet[0].address.number = 103
laurenStreet[0].address.street = 'E Sutton Pl'

console.log(laurenStreet)

const string = "is a very nice person!"

const personPhrase = items.map(per => `${per.name} ${string}`)

personPhrase.forEach(per => console.log(per))