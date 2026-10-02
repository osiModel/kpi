'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = function(name, city){
  return {name: name, city: city};
};

let obj = createUser('Sasha', 'Kiev'); 
console.log({obj});

