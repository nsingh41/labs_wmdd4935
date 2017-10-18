

let sum=0 ;
for(let count=2;count<process.argv.length;count++){
sum =sum+ Number( process.argv[count] );
}

console.log(sum);