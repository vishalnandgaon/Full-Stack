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