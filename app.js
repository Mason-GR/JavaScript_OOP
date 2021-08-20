console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    let listedHobbies = this.hobbies;
    if (this.hobbies.length > 2) {
      listedHobbies[listedHobbies.length - 1] =
        "and " + listedHobbies[listedHobbies.length - 1];
      listedHobbies = listedHobbies.join(", ");
    } else if (this.hobbies.length == 2) {
      listedHobbies = listedHobbies.join(" and ");
    }
    console.log(
      `My name is ${this.name}. I have ${this.pets}. I live in the great state of ${this.residence}, and I like ${listedHobbies}.`
    );
  }
  greeting(name2 = "User") {
    console.log(`Hi there ${name2}! I'm ${this.name}!`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }
  greeting(name2 = "User") {
    console.log(
      `Hey there ${name2}, I'm ${this.name} the TrueCoder! My job is ${this.occupation}.`
    );
  }
}

const Mason = new Person("Mason", "1 pet", "South Carolina", [
  "card tricks",
  "sleeping",
]);

const Evan = new Coder("Evan", "no pets", "Massachusetts", [
  "watching movies",
  "listening to music",
]);

Mason.greeting();
Mason.info();
Evan.greeting();
Evan.info();

//Bonus
console.log("EXERCISE BONUS:\n==========\n");
Mason.greeting("Ben");
