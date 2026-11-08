'use strict'

function contract(fn, ...types){
    let resT = types.pop();

    if(types.some(v => v !== types[0])) throw TypeError('Not every type is the same');

    return (...args)=>{
        if(args.length !== types.length) throw new Error(`argument lenght is not equal to types length`)
        let res = args.reduce(fn);
        if(typeof res !== resT.name.toLowerCase()) throw TypeError(`Result type differs from expected`);
        return res;
    }

}

const add = (a, b) => a + b;

const addNumbers = contract(add, Number,Number, Number, Number, Number, Number, Number);

const res = addNumbers(2,3,4,6,7,10);

console.dir(res); 