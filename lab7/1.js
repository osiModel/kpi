'use strict';

function removeElements(array, ...elements){
    const temp = array.filter((e) => !elements.includes(e));
    array.length = 0;
    array.push(...temp);
}

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);