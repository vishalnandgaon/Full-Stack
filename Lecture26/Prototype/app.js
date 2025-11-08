let todo={
    title:'buy flowers',
    desc : function(){
        return `your task is to ${this.title}`;
    }

}
console.log(todo.title);
console.log(todo.desc());
console.log(todo.scahin); // undefined aaega
// console.log(todo.sachin()); // error 
console.log(todo.toString());  // becozz of prototypes

// if you try to access the property of an object then 
// JS will fisrtly find it inside that object , if not found 
// then , it will go to its prototype

// PROTOTYPE  ===> it is also an object which is used as a fallback source of
// an object.

// ab aate h apne todo.toString() , ab ye koe object to define hai hi nhi apne 
// method me then it will go to its prototype.

// object(todo) -----> __proto__ ---> object.prototype
// __proto__ = dender proto
//  fallback source means pitaji ke charno me girna , backup source .
// __proto__ of the fallback NULL.
// this is prototypal chain
// root par pahuch gye 


// array bhi ek object hi h , behind the scene ye apne aap ko 
// object me badal deta h , yk in javascript everything is an object .
let arr=['sam', 'time', 'bounded'];
console.log(arr.__proto__);
console.log(arr.__proto__===Object.prototype);
console.log(arr.__proto__===Array.prototype);
console.log(Array.prototype.__proto__.__proto__);




//             objects
//                ^
//                |
//  Null --> Object.prototype --> Array.prototype --> array
//                |
//                |
//           String.prototype
//                |
//              String
//  same for boolean
// same for functions


