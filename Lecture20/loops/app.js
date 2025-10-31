// loops in java script 
// 1.for 2.while 3.do-while 4.for-in 5.for-of

for(let i=0;i<=5;i=i+1){
    for(let j=0;j<=5;j=j+1){
        if(i===j){
            break;
        }
        console.log(i,j);
    }
}



// while loop

let num=100;
while(num>=0){
    console.log(num);
    num=num-10;
}


// for -in loop (objects)
// jabbi me kisi object ke andar iterate karna chahta hu , use for-in
let person ={
    name:'vk',
    age:27,
    isMale:true,
}
for(let item in person){
    console.log(item);
}
for(let item in person){
    console.log(person[item]);
}
for(let item in person){
    console.log(`${item} --> ${person[item]}`);
    // isme this.item undefined dega ,and person.item bhi undefined dega
}



// for-of loop
// jabbi me kisi iterable item ke andar iterate karna chahta hu use for-of
let array=['vk','hardik','yuvraj','panday'];
for(let item of array){
    console.log(item);
}

// Do while loop 

// How it works:

//     Execute do block:
//     The code inside the do block is executed first, without checking any conditions. This guarantees that the code runs at least once.
//     Evaluate while condition:
//     After the do block's execution, the condition in the while statement is evaluated.
//     Repeat or exit:
//         If the condition evaluates to true, the code block inside the do statement is executed again.
//         If the condition evaluates to false, the loop terminates, and the program continues with the statement following the do...while loop. 

// Example:
// JavaScript

// let count = 0;

// do {
//   console.log("Current count:", count);
//   count++;
// } while (count < 5);

// console.log("Loop finished. Final count:", count);