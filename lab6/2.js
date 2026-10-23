'use strict';

//const {EventEmitter} = require('node:events')

const compose = (...args) => {
    //const emitter = new EventEmitter()
    const handlers = [];
    const f = (x) => {
        try{    
            let temp = x;
            for(let i = args.length-1;i>=0;--i){
                temp = args[i](temp);
            }
            return temp;
        }catch(error){ 
            for(const handler of handlers) handler(error)
            //emitter.emit('error',error)
            return undefined;
        }
    }
    
    f.on = function(s,handler){
        if(s === 'error'){
            handlers.push(handler);
        }
        return this;
    }
   /* f.on = (s,callback)=>{
        emitter.on(s,callback);
        return f;
    }*/


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
