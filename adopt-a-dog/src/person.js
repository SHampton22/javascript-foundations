var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;

  }

  fillFoodBowl() {
    // this.dog.eat();
    this.dog.hungry = false;
  }

  throwBall() {
    this.dog.fetchBall();
    // this.dog.energyLevel--;
    return `${this.dog.name} loves playing fetch!`;
  }

  introduceNewFriends(dogFriend) {
    this.dog.makeNewFriend(dogFriend);
    // this.dog.friends.push(dogFriend.name);
  
  }

  adoptAPup (dogName, dogAge) {
    if (this.dog === undefined){
      var newDog = new Dog({ name: dogName, age: dogAge})
      this.dog = newDog;
    } else {
      return `You can\'t adopt ${dogName}. You already have ${this.dog.name}!`;
    }
  }

}

module.exports = Person;
