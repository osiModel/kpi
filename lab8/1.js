'use strict';

const fn = (par, callback) => {
  if (!par) {
    callback(new Error('Parameter needed'));
    return 'None';
  }
  callback(null, `Data ${par}`);
  return 'Value';
};

const res = fn('ex', (err, data) => {
  if (err) throw err;
  console.dir({ data });
});

console.dir({ res });