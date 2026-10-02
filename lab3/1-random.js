'use strict';

const random = (min=0, max) => {
  return Math.floor((max-min+1)*Math.random());
};

console.log(random(1,10));

