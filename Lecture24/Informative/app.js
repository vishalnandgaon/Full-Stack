// let and const= block scope
// var=functional scope

// block level scope=swarg ka darwaaza {}

// curly braces me jo bhi likhe that is called block scope

console.log("hii i am free");

// block scope
{
    console.log("hii i am block");
}


// Scope
// let and const ka intital scope = script scope
let score=50;
if(score>33){
    let x=20;
}
// console.log(x);
// reference error aagya , x is not defined but why?
// let x block scope me diya gya tha 



let y=10;

{
    let y=20;
    console.log(y);
}

console.log(y);
// output: 20 , 10

let z=10;
{
    console.log(z);
}
console.log(z);
// OUTPUT: 10,10

// example
var w=10;
{
    var w=30;
    console.log(w);
}
console.log(w);
// output:30, 30
// var me change hogye toh saare me honge kyuki var toh ek global scope h 


// example

var a=100;
function fun(){
var a=50;
console.log(a);
}
fun();  //50
console.log(a); //100
// var ek functional scope h , or mene isse function ke andar define kiya , when function ends it disappears

// example
let c=100;
function tun(){
    let c=300;
    console.log(c);
}
tun(); //300
console.log(c); //100


//Hoisting

console.log(m);
console.log(n);
console.log(o);

var m=10;
let n=100;
const o =1000;
