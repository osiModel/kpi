'use strict'

const store = v=>()=>v;

const read = store(5);
const value = read();
console.log(value); // Output: 5