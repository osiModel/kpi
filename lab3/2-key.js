'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'

const generateKey = (length, possible) => {
  let key = '';
  for(let i = 0;i<length;++i){
    key += possible[Math.floor((Math.random()*characters.length))];      
  }
  return key;
};

console.log(generateKey(16,characters));
