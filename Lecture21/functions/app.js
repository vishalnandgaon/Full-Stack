
// function declaration
function sum(){
    let num1=10;
    let num2=20;
    console.log(num1+num2);
}
// function calling
sum();
// we can call a function any number of times

// parameterised functions
let num3=30;
function sum1(num3){
    let num1=10;
    let num2=20;
    console.log(num1+num2+num3);
}
sum1(30);
sum1(num3);



//  function return 
function sum2(){
    let num1=10;
    let num2=20;
    return (num1+num2);
}

console.log(sum2());

// multiple arguments dena 
function sum3(num1,num2){
    return num1+num2;
}

console.log(sum3(30,40)); //output=70
console.log(sum3(30)); //output=NaN
console.log(sum3()); // output=NaN



// another case 
function sum4(num1,num2){
    console.log(num1);
    console.log(num2);
}
console.log(sum4(30)); // 30 then undefined then undefined

// ek or case
function sum5(num1,num2=40){ //default perametrized function
    console.log(num1);
    console.log(num2);
}
sum5(20);

// another case
function sum6(num1=20,num2=40){ //default perametrized function
    console.log(num1);
    console.log(num2);
}
sum6();

// another case
function sum5(num1=10,num2){ //default perametrized function
    console.log(num1);
    console.log(num2); // undefined 
}
sum5(20); //override the default first parameter


function gradeCalculator(marks){
    if(marks>=80){
        return 'o+';
    }
    else if(marks>=60){
        return 'A+';
    }
    else if(marks>=40){
        return 'B+';
    }
    else{
        return "Fail";
    }
}
console.log(gradeCalculator(45)); // B+
console.log(gradeCalculator('vk')); // Fail

// outputs
function summ(num1,num2){
    return num1+num2;
}
console.log(summ(10,20));


function summ(num1,num2){
    return num1+num2;
}
console.log(summ(10,'vk'));

let ans=(summ(10,true));
console.log(typeof(ans)); //number
console.log(ans);  // 11

let ans1=(summ(10,false));
console.log(typeof(ans1)); //number
console.log(ans1);  // 10


let ans3=(summ('100',true));
console.log(ans3); // 100true
console.log(typeof(ans3)); // string


// FUNCTIONAL EXPRESSION
// kisi variable me store karane ka function ka toh hogya function expression
// this is called functional expression, first class function,and first class citizen
let funksion=function iphone(){
    console.log("hii phone");
}
console.log(funksion);

// function behind the seen kese chalte h
// whenever a js code is run a global execution context is created.
// GEC(global execution context) isme 2 phase hote h MCP(memory creation phase) and CEP(code execution phase) 
// phle code ko dekhke memory allot hogi ,ye jitne variable and functions ko memory allocate kar dega 
// ab code execution phase ab ek ek karke code run hoga.
// jab hum kisi function ko CEP me face karte h toh CED me hii alg se MCP and CEP bante h phle wo execute hote h then firse CED.

// all this is called call stack.