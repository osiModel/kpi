'use strict'

function difference(array1, array2){
    return array1.filter((e)=> !array2.includes(e)); 
}

const array1 = ['Beijing', 'Kiev'];
const array2 = ['Kiev', 'London', 'Baghdad'];
const result = difference(array1, array2);
console.log(result);