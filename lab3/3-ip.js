'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const array = [];
  let str = '';
  for(let i = 0;i<=ip.length;++i){
    if(ip[i] === '.'){
      array.push(parseInt(str));
      str=''
    }else{
      str+=ip[i];
    }
  }
  array.push(parseInt(str));

  console.log(array);
  let Int = array.reduce((a,b)=>{
    return (a << 8) + b;
  });

  return Int;
};

console.log(ipToInt('192.168.1.10'));
