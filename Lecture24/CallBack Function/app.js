// callback function is a function passed into another function when is then invoked inside the function
// every HOF is not callback function


function gtboolean(a){
    return typeof(a)==='boolean';
}
function gtnumber(a){
    return typeof(a)==='number';
}
function gtstring(a){
    return typeof(a)=='string';
}

function check(item,fn){
    return fn(item);   // calling here
}

console.log(check(true,gtboolean));
console.log(check(19,gtstring));
console.log(check(true,gtnumber));