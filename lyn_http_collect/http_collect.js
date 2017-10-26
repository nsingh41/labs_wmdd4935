let http=require('http');
let temp=process.argv[2];
var bl = require("bl");
http.get(temp,function(response){
   
    response.pipe(bl(function (err,data){
        if(err) console.error(err)
        
        data=data.toString();
        console.log(data.length);
        console.log(data);
        
        
        
    }));
   
  
    
});