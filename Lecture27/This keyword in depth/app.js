// this kisko point kar rha h ye decide hoga  
// aapki function calling /invocation se.


// 1. Regular invocation

function fn(){
    console.log(this); // this points to window
}
fn();



// 2. Method invocation
let obj={
    number :2,
    fn:function(){
        console.log(this); // this points to the object here (obj)
    }
}
obj.fn();
// come up question
let myFun=obj.fn;
myFun();  // ab this kise point karega
// ab this point karega window ko, but kyu 
// kyuki myFun() direct call h bhaiii mere

// ek or question
let obj2={
    fn:function(){
        function calculate(){
            console.log(this);
        }
        calculate(); // regular invocation hua h yahan toh.
    }
}

obj2.fn(); // this --> window ko point karega 
// actually jis function ke andar this dia h , wo kaise run hua h ,uspe depend karta h this kise point karega



// 3. Constructor function calling

function CreateObj(){
    this.x=20;
}
let objj=new CreateObj();
console.log(objj);
console.log(objj.x);
// newly created object ko this point karega hamesa


// 4. .call() , .apply(), .bind()  // Polymorphism achive hora h with call and apply

let obb={
    a:20,
    fn:function(a,b,c){
        console.log(this,a,b,c);
    }
}

let obb2={
    a:50
}



obb.fn();
// obb2.fn(); // error

obb.fn.call(obb2); // ab ye this point karega obb2 ko 
// jab bhi hum .call() ka istemal kar rhe hote h, tab jo hum call ke andar 
// mention karte h , this usse point karta h

obb.fn.apply(obb2);
//  ye bhi same output diya 
// then what is the difference ??
// call me hum phla argument dete h wo this se point hota h , baki sb coma separated arguments de skte h
//  apply me phla argument this ka hi hota h fir coma laga ke sbko array me dete h

obb.fn.call(obb,1,2,3);
obb.fn.apply(obb,[5,6,7]);

// .bind()
let obb3={
    num:3,
    fn:function(){
        console.log(this);
    }
}

let myFunc=obb3.fn.bind(obb3); //context of this , 
// ab ye hamesa ke liye this bind hogya with obb3.
myFunc(); // yaha regular call hui , this point karna chahiye window ko 
// but ye bind hua pda h , so pointing obb3



// 5. ARROW FUNCTION
//  on next lecture.