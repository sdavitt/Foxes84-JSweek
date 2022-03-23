/* Object Prototype of a person */

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`This is ${this.name}. They are ${this.age} years old.`);
    }

    increaseAge(newage){
        this.age=newage;
    }
}


function PersonF(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(`This is ${this.name}. They are ${this.age} years old.`);
    }
}

let p1 = new Person('Charles', 23);

let p2 = new PersonF('Carlos', 25);

p1.printInfo();
p2.printInfo();