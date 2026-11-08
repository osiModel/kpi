'use strict'

const obj = { a: 1, b: 2, c: 3 };

function iterate(obj,callback){
  for(const k in obj){
    callback(k,obj[k],obj);
  }
}

iterate(obj, (key, value) => {
  console.log({ key, value });
});