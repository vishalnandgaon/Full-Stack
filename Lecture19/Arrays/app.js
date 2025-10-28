
// Array declaration

let arr=[1,23,4,5];
console.log(arr);
console.log(arr[31]);  // output=undefined

// agar me arr=[1,23,4,5] ke baad semicolon nahi du toh console.log sirf array ka size print karega
// agar ; diya h toh size and array dono print karega

// Everything inside javascript is an object

let arr2=[1,2,3,'vk', 'vishal',null,undefined,true];
console.log(arr2);

// array ki length
console.log(arr.length);
console.log(arr2.length);

// access elements 
console.log(arr2[3]);

// type of elements in array
let ans=arr2[3];
console.log(typeof(ans));

// undefined error not exactly error
let ans1=console.log(arr2[2]);
console.log(typeof(ans2));
// ans1 me store hua kuch ?? nhi wo undefined store hua , kyuki i can't store console.log .


// console.log(10) console.log(20);   wrong
console.log(10); console.log(20);  // ye tarika sahi h

let arr3=[1,2,3,'vk', 'vishal',null,[2,3,4,5],undefined,true];
console.log(arr3[6]);
console.log(arr3[6][1]);