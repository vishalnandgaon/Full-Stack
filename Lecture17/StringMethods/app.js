
// 1. SUBSTR METHOD
let str;
str='vishalchaudhary@gmail.com';
console.log(str);
// 2 se start to end
console.log(str.substr(2));

// 2 se start and til legth 5
console.log(str.substr(2,5));
// output = shalc

// -5 se start legth 5 means -5 se start and going towards -1.
console.log(str.substr(-5,5));

// -5 se start towards -ve
// output nothing = khali , length kabhi -ve nhi hoti
console.log(str.substr(-5,-5));


// 2.SUBSTRING METHOD
// isme start , end index dete h
console.log(str.substring(2));
console.log(str.substring(2,5));
// jabbi start > end , swapping occurs so,5,2 will become 2.5
console.log(str.substring(5,2));
// jabbi -ve values are encountered they are converted to 0. so -5=0
console.log(str.substring(-5,2));
// output=empty , nothing will be displyed
console.log(str.substring(-5,-2));



// 3.INDEXOF METHOD

// returns first index of given character
console.log(str.indexOf('a'));

// want to skip some indexes and then find the index of an character
console.log(str.indexOf('a',5));
// it was start from 5.


// 4.REPLACE METHOD
// only first ocuurance is replaced
console.log(str.replace('a','m'));


// 5. REPLACEALL METHOD
console.log(str.replaceAll('a','m'));


// 6.REPEAT METHOD
console.log(str.repeat(2));


// 7.TOUPPERCASE METHOD
console.log(str.toUpperCase());


// 8. TOLOWERCASE METHOD
console.log(str.toLowerCase());

// 9. TRIM
// remove all the trailing and starting spaces
console.log(str.trim());