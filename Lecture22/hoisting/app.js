// ques1
var a=20;
function meraFunc(){
    console.log('inside mera function')   
}
console.log(a);
meraFunc();



// ques2 ---> hoisting (when you access a variable even before its declaration that concept is called hoisting  , same with functions)
console.log(b);  //accessing a variable
myfunc(); // accessing a function

// function declaration
function myfunc(){
    console.log('inside my func')
}
// variable declaration
var b=20;


// ques3
console.log(a);
smmm();
function smmm(){
    console.log(a);
    console.log('inner function')
}
let a=10;
// isme error aagya kyu?? because i used let here , and a was declared earlier


// hoisting let , var , const teeno me ho skti h
// But let and const ke case me dead temporal zone ke case me hoisting hoti h 

// DTZ MCP and CEP ke beech me hota ,hum koe bhi variable jab tak access nhi kar skte jab tak usse koe value assign nh hui ho
