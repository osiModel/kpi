'use strict'
function max(obj){
    let a = Number.MIN_VALUE;
    for(let i = 0;i<obj.length;++i){
        for(let j = 0;j<obj[i].length;++j){
            if(a < obj[i][j]) a = obj[i][j]
        }
    }
    
    return a;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(m)