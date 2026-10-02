'use strict';

const array = [true,typeof(1/0), 'hello', 5,{name: 'ben'}, NaN,[1,2,3],undefined,12,null, -200,"EGYPT", false, false, 'word',null]
const hash = {}; 

for(const a of array){
    if(hash[typeof a] === undefined){
        hash[typeof a] = 1;
    }else{
        hash[typeof a]++;
    }
}

console.log({hash})