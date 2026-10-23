'use strict'

function sum(...args){
    let total = 0;
    do{
        total+=args.pop()
    }while(args.length);

    return total;
}

const a = sum(16,2,3)
console.dir(a)