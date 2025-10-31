let obj={
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

obj.total();
obj.bulao();