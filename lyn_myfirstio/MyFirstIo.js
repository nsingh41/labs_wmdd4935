var fs=require('fs')

let buff=fs.readFileSync(process.argv[2])

let x = buff.toString();

let y =x.split('\n');

console.log(y.length-1);

