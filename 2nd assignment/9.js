function Person(name,age){
    this.name=name
    this.age=age

}
Person.prototype.introduce=function(){
    return `Hi my name is ${this.name} and I'm ${this.age} years old`
}

function Employee(name,age,jobtittle){
    Person.call(this,name,age)
    this.jobtittle=jobtittle
}
Employee.prototype.work=function(){
    return `${this.name} is working ${this.jobtittle}`
}
Object.setPrototypeOf(Employee.prototype,Person.prototype)

const per=new Person("Sharwan",26)
const Emp=new Employee("Sharwan",26,"WebDeveloper")

console.log(per.introduce())
console.log(Emp.introduce())
console.log(Emp.work())