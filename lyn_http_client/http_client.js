let http=require('http');
let temp=process.argv[2];

http.get(temp,function(response){
   
    response.setEncoding('utf8');
   response.on('data',console.log);
  
    
})