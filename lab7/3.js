'use strict'

function difference(array1, array2){
    const res = [];
    array1.forEach((e)=> {if(!array2.includes(e))res.push(e)}); 
    return res;
}

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);