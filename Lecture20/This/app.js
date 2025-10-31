let obj1={
    Evs:90,
    cn:90,
    web:100,
    maths:10,

    total:function(){
        console.log(90+90+100+10);
    },
    // when we do not return anything from function , javascript automatically return undefined
    bulao:function(){
        console.log("hii baby");
    }
}

obj1.total();
obj1.bulao();


let obj2={
    Evs:90,
    cn:90,
    web:100,
    maths:10,

    total:function(){
        console.log(this.Evs +this.cn+this.web+this.maths);
    },
    // when we do not return anything from function , javascript automatically return undefined
    bulao:function(){
        console.log("hii baby "+ this.Evs);
        console.log(`hii baby ${this.Evs}`); // backticks
    }
}

obj2.total();
obj2.bulao();