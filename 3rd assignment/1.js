function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
  };
  
  const alice = new Person("Alice");
  alice.greet(); // Output: "Hello, Alice"

  console.log(alice.hasOwnProperty("name")); // true
console.log(alice.hasOwnProperty("greet")); // false
console.log(alice.__proto__ === Person.prototype); // true

  