class Dog {
  constructor(dog) {
    this.name = dog.name;
    this.age = dog.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];

  }

  eat() {
    if ( this.hungry === true) {
      this.hungry = false;
      return 'Yum!';
    } else {
      return 'I refuse to eat.';
    }
  }

  fetchBall() {
    if (this.energyLevel <= 3) {
      return 'Nah, I\'m going to sleep instead.';
    } else {
      this.energyLevel--;
    return 'This is fun!';
    }
  }

  sleep() {
    if (this.energyLevel <= 9) {
      this.energyLevel++;
    } else {
      return 'I have too much energy to rest. I\'m going to chew something instead.';
    }
  }

  makeNewFriend(dogFriend) {
    this.friends.push(dogFriend.name);
  }


}

module.exports = Dog;
