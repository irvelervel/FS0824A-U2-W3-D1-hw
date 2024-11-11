// 1) classe User con 4 proprietà + 1 metodo
class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
      console.log(`${anotherUser.firstName} è più vecchio di ${this.firstName}`)
    } else {
      console.log(`${this.firstName} è più vecchio di ${anotherUser.firstName}`)
    }
  }
}

const user1 = new User('Mario', 'Rossi', 20, 'Roma')
const user2 = new User('Gigi', 'Sabani', 70, 'Foggia')

user1.compareAge(user2) // "Gigi è più vecchio di Mario"
