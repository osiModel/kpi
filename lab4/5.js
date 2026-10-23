'use strict'

const sum = (...args) => args.reduce((p,c) => p + c);

const a = sum(16,2)
console.dir(a)