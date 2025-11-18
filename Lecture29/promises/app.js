// promise

// let promise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let data='hi dosto ye promise h ';
//         // resolve(data); //case1 resolve hogya

//         // let err='oops reject hogya ,dikkat ban gyi';
//         // reject(err);

//         // resolve('hii me resolve hogya .then');
//         reject('hi me reject hogya ');
//     },3000)
// });

// // agar resolve hogya function toh .then use hoga 
// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// // agar reject hua toh ye chalega .catch me 


let p1 =new Promise((resolve,reject) =>{
    console.log('wait for 3 seconds please')
    setTimeout(()=>{
        resolve();
        // reject();
    },3000)
})

// p1.then().catch()
// p1.then(()=>{
//     console.log("kaam process hogya ")
// }).catch(()=>{
//     console.log('error aagya bhaii sahab');
// })



// .then() chaining       ye cheej problem arise kar rhi h , bhaii vertical chalte rho, .then .then hota rhta h  Vertical growth
// here promise ke andar bhi ek or promise di diya humne
p1.then(()=>{
    return new Promise((resolve,reject) =>{
        console.log('promise run kar dia h intezar karo ab');
        setTimeout(() =>{
            console.log('2 sec lug gye bhai sahab');
            resolve();
        },2000);
    })
}).then(()=>{
    console.log('dono kaam hogye bhaii sahab');
})




// PROMISE SE BACHNE KE LIYE ASYNC -AWAIT
 




