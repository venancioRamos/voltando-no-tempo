

function numPrimoIntervalo  (num)  {
    
    
    for (let i = 2; i <= num ; i++) {
        let isTrue = true;
        for (let prim = 2 ; prim < i ; prim ++) {
            if (i%prim===0) {isTrue = false
            break;
        }
   
    }
    if (isTrue) console.log(i)
       

    
    
}
}
numPrimoIntervalo(20)