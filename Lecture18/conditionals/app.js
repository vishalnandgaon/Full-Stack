
// if(true){
//     console.log("jai baba ki");
// }
// else
//     console.log("jai shree ram");


let age=20;

if(age<18){
    console.log("Not allowed to enter");
}
else if(age<=21){
    console.log("Allowed to enter the club");
}
else{
    console.log("Allowed to do anything");
}

// how to take user input
let naam =prompt("Enter your name");
console.log(naam);


let number =prompt("enter any number");
console.log(number);
console.log(typeof(number)); // string
// initially ye string  me input leta h 

// to take input in desired datatype
let num =parseInt(prompt("enter any number"));
console.log(num);
console.log(typeof(num));