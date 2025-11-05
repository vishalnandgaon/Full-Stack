// functions jo kisi dusre function ko as an argument lete h 
// ya firr function hi return kara dete h are called higher order functions

// CONDITION 1
function a(fn){
    console.log("i am inside A");
    fn();
}

function b(){
    console.log("hi i am inside B");
}

a(b);
// here function a is HOF


// CODITION 2
function c(){
    console.log("inside a");
    function b(){
        console.log('inside b');
    }
    return b;
}
let temp= c();
console.log(temp); // isse pura function hi print ho jaega b wala 


// Real life example
// make a function which separate string ,  number and boolean
function getBoolean(arr){
    let result =[];
    for(let item of arr){
        if(typeof(item)==='boolean'){
            result.push(item);
        }
    }
    return result;
}

function getString(arr){
    let result =[];
    for(let item of arr){
        if(typeof(item)==='string'){
            result.push(item);
        }
    }
    return result;
}

function getNumber(arr){
    let result =[];
    for(let item of arr){
        if(typeof(item)==='number'){
            result.push(item);
        }
    }
    return result;
}
let arr=['sam','samarth',10,20,true,false];

console.log(getBoolean(arr));
console.log(getNumber(arr));
console.log(getString(arr));



// we can make a HOF to solve this
function gtboolean(a){
    return typeof(a)==='boolean';
}
function gtnumber(a){
    return typeof(a)==='number';
}
function gtstring(a){
    return typeof(a)=='string';
}
// loop and result append karna 

function get(array,fn){
    let result=[];
    for(let item of array){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}


console.log(get(arr,gtboolean));
console.log(get(arr,gtnumber));
console.log(get(arr,gtstring));