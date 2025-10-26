

let boolVariable=true;
console.log(boolVariable);
// output=true

let newBool=false;
console.log(newBool);


let ans=boolVariable==newBool;
console.log(ans); 
// output=false

let one='true';
let ans2 =boolVariable==one;
console.log(ans2);
// string and bool are not equal

let two='false';
console.log(two==newBool);
// output false

let ans1=boolVariable===newBool;
console.log(ans1); 
// output false

let ans3=(boolVariable==1);
console.log(ans3);
// output aega true
// here true compare hua 1 se which is number but true is boolean , this is called general equality 
// no datatypes are checked here


let ans4=(boolVariable===1);
console.log(ans4);
// output=false 
// this is called strivt equality
