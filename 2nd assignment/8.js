function Animal(){
    this.type="Animal"
}
Animal.prototype.sound=function(){
    return 'Animal Sound'
}

function Dog(){
    Animal.call(this)
}
Dog.prototype.sound=function(){
    return "Bark"
}

Object.setPrototypeOf(Dog.prototype,Animal.prototype)
const instance=new Dog()
console.log(instance.type)
console.log(instance.sound())