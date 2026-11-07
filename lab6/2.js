'use strict';

import {EventEmitter} from "node:events"

function compose(...args){
    let emitter = new EventEmitter();

    function f(x){
        try{
            return args.reduceRight(((p,c) => c(p)),x);
        }catch(error){
            emitter.emit('error',error);
            return null;
        }

    }
    f.on = function (eName, callback){
        emitter.on(eName,callback);
        return this;
    }


    return f;
}

const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const upperCapital = (s) => s.split(' ').map(upperFirst).join(' ');
const lower = (s) => s.toLowerCase();
const trim = (s) => s.trim();

const s = '   MARCUS AURELIUS   ';

const capitalize = compose(upperCapital, 2, trim);

capitalize.on('error', (err) => {
    console.log('ERROR caught', err.message);
});

console.log(`capitalize('${s}') = '${capitalize(s)}'`);
