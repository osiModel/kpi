'use strict'

function unique(args){
    return args.filter((e,index) => args.indexOf(e) === index);
}

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);