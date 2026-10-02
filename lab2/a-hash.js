'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    'Marcus Aurelius': '+380423455442', 
    'Vasya Vasiovich':'+380445325235', 
    'Petro Petrovich': '+380443444443', 
    'Ivan Ivanovich': '+380445554433',
};

const findPhoneByName = function(name){
    if(typeof(phonebook[name]) === 'string'){
        return phonebook[name];
    }
    return 'NOT FOUND';
};

console.log(findPhoneByName('Ivan Ivano'));


