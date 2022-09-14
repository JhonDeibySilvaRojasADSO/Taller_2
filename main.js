addEventListener("DOMContentLoaded", ()=>{
    //datos de entrada
    //operaciones basicas
    let pri1=Number(prompt("dijite el valor del producto# 1 :"))
    let pri2=Number(prompt("dijite el valor del producto# 2:"))
    let pri3=Number(prompt("dijite el valor del producto# 3 :"))
    let pri4=Number(prompt("dijite el valor del producto# 4 :"))
    let pri5=Number(prompt("dijite el valor del producto# 5 :"))
    //procesos u operaciones
    let des1=pri1-(pri1*0.05)
    let des2=pri2-(pri2*0.05)
    let des4=pri4-(pri4*0.02)
    let des5=pri5-(pri5*0.02)
    let des6=des1+des2+pri3+des4+des5
    //salida o entrada de resultados
    console.log("valor de los 2 primeros productos son:",des1,"y",des2)
    console.log("valor del tercer producto es:",pri3)
    console.log("valor de los dos ultimos productos son:",des4,"y",des5)
    console.log("valor de toda la compra es de:",des6)
})
