'use strict'

const array = () => {
    const arr = []
    const f = (x)=> arr[x]
    f.pop = () => arr.pop()
    f.push = (x) => arr.push(x)

    return f
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(0)); // output: first
console.log(arr(1)); // output: second
console.log(arr(2)); // output: third

console.log(arr.pop()); // output: third
console.log(arr.pop()); // output: second
console.log(arr.pop()); // output: first

console.log(arr.pop()); // output: undefined
