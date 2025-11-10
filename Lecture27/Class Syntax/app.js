// class is a better way of writing the constructor
// called syntactical sugar.



//  ye hogya constructor
function person(firstname, lastname,mail){
    this.phlaname=firstname;
    this.lastnaam=lastname;
    this.email=mail;
}

person.prototype.printname= function(){
    console.log(`My name is ${this.phlaname} ${this.lastnaam}`)
}
person.prototype.getname= function(){
    return(`${this.phlaname} ${this.lastnaam}`)
}


let person1=new person('vishal','chaudhary','vkay@gmail.com');
console.log(person1);
console.log(person1.email);
console.log(person1.printname());
console.log(person1.getname());


// Constructor ko class ke andar likne kaa 

class Person{
    constructor(firstname,lastname,mail){
        this.phlaname=firstname;
        this.lastnaam=lastname;
        this.email=mail;
    }

    getName(){
        return(`${this.phlaname} ${this.lastnaam}`)
    }

    printName(){
        console.log(`My name is ${this.phlaname} ${this.lastnaam}`)
    }
}

let person2=new Person('ms','dhoni','msd@gmail.com');
console.log(person2);
console.log(person2.getName());


// Inheritance

class Student extends Person {
    constructor(firstname,lastname,mail,groupNo){
        super(firstname,lastname,mail);
        this.group=groupNo;
    }
}

let student1=new Student('barak','obama','obama@gmail.com',100)
console.log(student1);
console.log(student1.email);