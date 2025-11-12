// JAVASCRIPT 
// 1.weekly typed language
// 2.dynamic language
// 3.synchronus language
// 4.single threded

console.log('start');
console.log('run after 4 secs');
console.log('end');

// ye toh lagatar chal jaenge bina ruke 
// javascript me koe tarika bhi nhi h aisa
// lekin browser me h , that is called setTimeOut()
// settimeout() , 2 parameter lega phla callback function , dusra delay time in milliseconds.

console.log('start');
setTimeout(function(){
    console.log('run after 4 secs')
}, 4000);
console.log('end');

// Some other browser methods
// location
// local storage
// settimeout
// setinterval
// url
// console

// These all are called web API's

// Ab dekhte h how these things work
// 1. Browser ke andar phle banega call stack .
// call stack ke andar GEC then GEC se , call stack se call lagi callback function ko
// ye browser me store ho jaega , first wait karega jitna time humne sett kiya , here 4 seconds
// then register ho jaega browser ke andar wah function
// then it  go to the callback queue
// then to the event loop , to check whether stack is empty , if empty then send fuction working to the stack and then get executed.


// jab tk stack empty nhi hoga hamara koe bhi callback function nhi chalega 


console.log('start');
setTimeout(function(){
    console.log('run after 0 secs')
}, 0);
console.log('end');

// output : start ,end ,run after 0 secs
// kyuki phle start then end chalega then callback, kyuki ye dono phle se hi the na stack me
