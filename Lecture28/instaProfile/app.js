// Primitive tarika , wrong saa 

// function step1(){
//     setTimeout(function(){
//         console.log('image select kar rha hu');
//         return 'image';
//     },4000)
// }

// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kar rha hu ${image} rukja`);
//         return 'sundar filter wali photo';
//     },2000)
// }

// function step3(filteredImage){
//     setTimeout(function(){
//         console.log(`badiya sa caption dekhlia on ${filteredImage}`);
//         return 'photo + caption dono';
//     },3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(`${final} uploaded`)
//     },2000)
// }

// // calling
// let image=step1();
// let filteredImage=step2(image);
// let finalImage=step3(filteredImage);
// step4(finalImage);




// BETTER WAY

function step1(fn){
    setTimeout(function(){
        console.log('image select kar rha hu');
        // return 'image';
        fn('image') 
    } ,4000)
}

function step2(image){
    setTimeout(function(){
        console.log(`applying filter to ${image} rukja`);
        return 'filtered fotu';
    },2000)
}

function step2(image,cb){
    setTimeout(function(){
        console.log(`sundar kar rha hu ${image} rukja`);
        // return 'sundar filter wali photo';
        cb('filtered image aagya')
    },2000)
}

function step3(filteredImage,cb){
    setTimeout(function(){
        console.log(`badiya sa caption dekhlia on ${filteredImage}`);
        // return 'photo + caption dono';
        cb('final Image')
    },3000)
}

function step4(final){
    setTimeout(function(){
        console.log(`${final} uploaded`)
    },2000)
}



step1(function(image){
    step2(image,function(filteredImage){
        step3(filteredImage,function(finalImage){
            step4(finalImage);
        })
    });
})

// callback ke advantages 
// phla function khatam hoga tab dusra chalega 


// disadvantages 
// callback ke abdar callback , fir callback ek andar callback 
// by this code ka flow grow's towards horizontal side
// this is called Callback hell. Pyramid of doom

// ḍusra disadvantage
// bina step1 chalae me dusra step nhi chala pata 
// ye dependency bdha deta h 

// solution ---> promises 
// promises ka solution ---> Async-Await