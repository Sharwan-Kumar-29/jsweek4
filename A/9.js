// factory function that can be used to create animal object

function animal(legs,veg){
    let obj={}
    obj.noOfLegs=legs
    obj.vegetarian=veg
    obj.eat=function(){
        
        return "eating...."
    }
    obj.greet=function(){
        
        return `Hi, I have ${this.noOfLegs} legs`
    }
    return obj
    
}
let a1=animal(4,true)
console.log(a1.eat())
console.log(a1.greet())

//factory function to a constructor function

function AnimalCF(legs,veg){
    this.noOfLegs=legs
    this.vegetarian=veg
    this.eat=function(){
        return `eating`
    }
    this.greet=function(){
        return `Hi, I have ${this.noOfLegs} legs.`
    }
}
let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); // eating...
console.log(animalCF.greet()); // Hi, I have 4 legs.

//Factory function to an ES6 class

class Animal{
    constructor(legs,veg){
        this.noOfLegs=legs
        this.vegetarian=veg
    }
    eat(){
        return `eating....`
    }
    greet(){
        return `HI, I have ${this.noOfLegs} legs`
    }
}
let animalES6 = new Animal(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); // Hi, I have 4 legs.

