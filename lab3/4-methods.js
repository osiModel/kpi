'use strict';

function methods (iface){
  const array = [];
  for(const face in iface){
    const func = iface[face];
    if(typeof func === 'function'){
      array.push([face,func.length]);
    }
  }


  // Introspect all properties of iface object and
  // extract function names and number of arguments
  // For example: {
  //   m1: (x) => [x],
  //   m2: function (x, y) {
  //     return [x, y];
  //   },
  //   m3(x, y, z) {
  //     return [x, y, z];
  //   }
  // will return: [
  //   ['m1', 1],
  //   ['m2', 2],
  //   ['m3', 3]
  // ]

  return array;
};
function f(a,v,c){}
function v(s,x){}

console.log(methods({f,v,methods}));
