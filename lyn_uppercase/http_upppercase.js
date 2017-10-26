let http=require('http');
let map = require('through2-map');

let server=http.createServer(function(inStream,outStream){
    if(inStream.method!='POST'){ return outStream.end('Return a Post inStreamuest please')}
    
    
     inStream.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase() 
     })).pipe(outStream); 
});

server.listen(Number(process.argv[2]));