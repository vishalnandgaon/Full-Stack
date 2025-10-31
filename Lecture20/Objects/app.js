let person={
    naam:"Vishal",
    age:27,
    isMale:true,
    favcolor:'Blue'
};
// print whole object
console.log(person);

//accessing object elements
console.log(person.naam);
console.log(person.age);

// we can access this way also
console.log(person['age']);
console.log(person['isMale']);

// objects are pass by reference
let person2=person;
person2['age']=43;
console.log(person2.age);
console.log(person.age);



