// for each() 
// ye ek callback function accept karta h 
// ye apne aap chalta h 
// humko bs function likhna h

let students=['sachin','hardik','manish','sufiya','akshay'];
students.forEach(function(item){
    console.log(item)
})

students.forEach(function(vk,jaan){
    console.log(`juice was  ${vk} ---> index was ${jaan}`);
}
)

