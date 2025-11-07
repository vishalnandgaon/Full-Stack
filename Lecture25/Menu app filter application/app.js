let menu=['palak paneer' , 'chole chawal','chicken dhatura','panner butter masala','manchurian', 'chicken biryani', 'pizza','egg burji','soda'];

function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !==-1 || food.toLowerCase().indexOf('egg') !==-1){
        return false;
    }
    return true;
}
let vegMenu=menu.filter(isVeg);
console.log(menu);
console.log(vegMenu);