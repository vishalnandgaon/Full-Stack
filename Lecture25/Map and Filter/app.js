// Array method hii h ye , it accepts a callback function and 
// returns a new array or can return array element also

let marks=[10,15,12,28,9,4,50,44];
let newmarks=marks.map(function(item,index){
    return [item*2,index];
})

console.log(marks);
console.log(newmarks);


// Filter() Method
// filter or map ek jaise h, it accepts a callback function
// Also returns a new array
// lekin only sends the truthful value to the new array
// Means conditon=true, then add that value to array otherwise don't add


// filter() method --> array
let markss=[1,2,34,55,67,23,12];
let filteredArray=markss.filter(function(item,index){
    if(item>=5){
        console.log(index);
        return true; // in filter we can only value,not index
    }
    return false;
}
)

console.log(markss);
console.log(filteredArray);

// sort() 
let arr=[12,2,34,5,66,77,88,1,3,32,76];
let newArray=arr.sort(); // lexographically sort karta h , basis on first word 
console.log(newArray);
// it also accepts the callback function

let ascending=arr.sort(function(a,b){
    return a-b;
})

console.log(ascending);

let descending=arr.sort(function(a,b){
    return b-a;
})

console.log(descending);