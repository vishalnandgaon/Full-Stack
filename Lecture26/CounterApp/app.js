// Application of Closure , yarrr abstrsct class banani h

function counter(){
    let count=0;

    return {
        getCount: function(){
            return count;
        },
        increment: function(){
            count+=1;
        },
        decrement: function(){
            count-=1;
        },
        reset: function(){
            count=0;
        }
    };
}

let counter1=counter();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());