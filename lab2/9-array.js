'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380423455442' },
    { name: 'Vasya Vasiovich', phone: '+380445325235' },
    { name: 'Petro Petrovich', phone: '+380443444443' },
    { name: 'Ivan Ivanovich', phone: '+380445554433' },
];

const findPhoneByName = function(name){
    for(const person of phonebook){
        if(person.name === name){
            return person.phone;
        }
    }

    return "NOT FOUND";
};

console.log(findPhoneByName('Vasya Vasiovich'));


