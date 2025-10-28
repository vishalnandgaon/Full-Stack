// DESTRUCTIVE METHODS

let arr=[10,11,22];
console.log(arr);

// PUSH => ye last me add kar dega array ke 
arr.push(29);
console.log(arr);
let an=arr.push(12);
console.log(an);
// push return length of array

// POP => ye last me se remove kar dega 
arr.pop();
console.log(arr);
let an1=arr.pop();
console.log(an1);
// return last popped element

// UNSHIFT => adding elements at the start of the array ,add one at a time
arr.unshift(100);
console.log(arr);
let ans1=arr.unshift(45);
console.log(ans1);
// unshift ka return hota h size of array


// SHIFT => index aage throw kar deta h like 0 index aage badh jaegi , like deleting element from start. one at a time 
arr.shift();
console.log(arr);
let ans2=arr.shift();
console.log(ans2);
// shift ka return hota h jo element shift kiya h , yani old 0th index

// MORE METHODS

let arr1=[10,20,30,40];
console.log(arr1);

// slice
console.log(arr1.slice(2));
console.log(arr1.slice(1,3));
// slice(startindex, endindex)


// splice
console.log(arr1.splice(3));
console.log(arr1);
// isme  start and length dete h
// ye remove kar deta h that slice ko original array se , it is destructive method
// ye jahan se delete karta h wahan pr add bhi kar skta h 
// e.g.
let arr2=[1,2,3,4,5,6,7];
arr2.splice(2,1,'jaat','ka','chora','baby');
console.log(arr2);


// NON destructive h split and join
// split => ye string method h waise 
let url='https://google.com/search/dog/best/color/black';
let ans = url.split('/');
console.log(ans);
// ye array me return karega , all things splitted


// back to string from splitted
// Join method => for both array and string
console.log(ans.join('/'));

// concat => NON destructive
let arr3=[1,2,3,45,6,7,8];
let arr4=[2,3,4,5,6,7,8,9];
console.log(arr3.concat(arr4));
console.log(arr3);
// valid for string as well

let str='chora jaat ka';
let str2=' system bana rha h ';
console.log(str.concat(str2));


// includes

let array=['sam','mohd','hardik'];
console.log(array.includes('sam')); //true
console.log(array.includes('moh')); // false

let str3='samarth';
let str4='vohara';
console.log(str3.includes('a')); //true
console.log(str3.includes(str4));



// indexof
console.log(str3.indexOf('a'));
console.log(str3.substring(3).indexOf('a'));


// reverse

let str5='vishal';
let arr5=['sam','time', 'good'];
console.log(arr5.reverse()); //kaam karega , destructive method
// console.log(str5.reverse()); // reverse string par kaam nhi karta


// arrays are reference type
// change in other reference will relfect changes in original array

let arr6=[2,3,4,5];
let arr7=arr6;
console.log(arr7);
arr7.reverse();
console.log(arr7);
console.log(arr6);
// dono reverse hogye
