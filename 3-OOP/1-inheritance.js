// SUPERTYPE
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

// SUBTYPE
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird,
};

Dog.prototype = {
  constructor: Dog,
};

/*
Inherit Behaviors from a Supertype
*/
// STEP 1: make an instance of the supertype (or parent)
// Way 1 -> have some disadvantages
// let animal = new Animal();
// Way 2 -> resolve advantages
/*
- Object.create(obj) -> creates a new Object + set the new Object's prototype to be 'obj'
- By setting the prototype of animal to be the prototype of Animal, 
you are giving the animal instance the same "recipe" as any other instance of Animal
*/
let animal = Object.create(Animal.prototype);
console.log(animal instanceof Animal); // true

// STEP 2: prototype of the subtype (or child) to be an instance of Animal
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// INSTANCES OF SUBTYPE
// testBird inherits all of Animal's properties, including the describe method
// testDog inherits all of Animal's properties, including the describe method
let testBird = new Bird('Lalala');
let testDog = new Dog('Lilili');

// tests 
testBird.describe();
testDog.describe();

// log to see constructor property
console.log(testBird.constructor); // Animal
console.log(testDog.constructor); // Animal

// CHANGING THE CONSTRUCTOR PROPERTY OF SUBTYPE
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

// log to see constructor property
console.log(testBird.constructor); // Bird
console.log(testDog.constructor); // Dog

// ADDING METHODS AFTER INHERITANCE
Bird.prototype.fly = function () {
  console.log("Kawk kawk");
};

Dog.prototype.bark = function () {
  console.log("Woof woof");
};
// test added methods
testBird.fly();
testDog.bark();