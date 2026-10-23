'use strict'

function unique(args){
    const temp = []
    return args.filter((e) => {
        if(!temp.includes(e)){
            temp.push(e);
            return true;
        }
        return false;
    })
}

const result = unique(['top', 'bottom', 'top', 'left']);
console.log(result);