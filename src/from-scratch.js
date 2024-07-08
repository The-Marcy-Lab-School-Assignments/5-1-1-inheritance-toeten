class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2) {
    super(side1, side2, side1, side2)
  }
  getArea() {
    return this.side1 * this.side2
  }
}


class Square extends Rectangle {
  constructor(side1) {
    super(side1,side1)
  }
  getDiagonal(){
    return Math.sqrt(2) * this.side1
  }
}

/* Be creative with this one! */
class Person {
  static #people = []
  constructor(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies

    Person.#people.push(this);
  }
  celebrateBirthday() {
    this.age++
    return `Happy birthday ${this.name}! What's it like to be ${this.age}?`
  }
  addHobby(newHobby) {
    if(!this.hobbies.includes(newHobby)) {
      this.hobbies.push(newHobby)
      return `${newHobby} has been added to your list of hobbies`
    }
  }
  getHobbies() {
    return `${this.name}'s hobbies are: ${this.hobbies.join(', ')}.`;
  }

  static list() {
    return Person.#people
  }

  static find(name) {
    return Person.#people.find(person => person.name === name)
  }
}

// const jommy = new Person('jommy', 35, ['skiing', 'eating', 'loving'])
// jommy.addHobby('fighting')
// console.log(jommy.getHobbies())
// console.log(jommy)

// console.log(Person.list())


module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
