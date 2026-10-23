'use strict'

function sum(...args){
    let total = 0;
    for(const o of args){
        total += o;
    }
    return total;
}

const a = sum()

console.dir(a)