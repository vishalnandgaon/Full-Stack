// a function bundled together with reference to its surrounding state or 
// lexical environment that is called closure.


function someFunc(){
    let username='vishal';
    function printName(){
        console.log(username);
    }
    return printName;
}

let returnedValue=someFunc();
returnedValue();  //function printName(){
                    //  console.log(username)
                     //    }

//------------------------ 
// real life use

function counter(){
    let count=0;
    function getCount(){
        return count;
    }

    return getCount;
}

let counter1=counter();
console.log(counter1());
// console.log(counter1.getCount()); 
// getCount is not a function

// Second way ---------------
function counter2(){
    let count=0;

    return {
        getCount : function(){
            return count;
        }
    };
}

let counterr=counter2();
console.log(counterr.getCount());

