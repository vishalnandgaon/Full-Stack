

function fun(){

}

let naam=fun();
console.log(naam);


// constructor
function user(){

}

let user1=new user();
console.log(user1);
// new keyword before the function calling is creating this function
// as a constructor function whose task/job is to create object.

// Properties in costructor

// function user2(user,mail){
//     this.username=user;
//     this.email=mail;
//     this.description=function(){
//         return `my name is ${this.username}`
//     }
// }

// let user3=new user2('vishal', 'vk@gmail.com');
// let user4=new user2('vk', 'vkay@gmail.com');
// console.log(user3);
// console.log(user3.description());
// console.log(user4);
// console.log(user4.description());



// Convention in constructor
// 1. Start constructor with capital letter.



// prototype of constructor
// ye mere khud ka banaya prototype h 



// prototype me alag se add karna 
function user2(user,mail){
    this.username=user;
    this.email=mail;
    
}

user2.prototype.description=function(){
    return `my name is ${this.username}`
}

let user3=new user2('vishal', 'vk@gmail.com');
let user4=new user2('vk', 'vkay@gmail.com');
console.log(user3);
console.log(user3.description());
console.log(user4);
console.log(user4.description());