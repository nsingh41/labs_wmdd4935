let http=require('http');

var bl = require("bl");

let counter=0;
let output=[];

for(var i=0;i<3;i++){
    httpGet(i);
}

function httpGet(value){
   
    
http.get( process.argv[2 + value],function(response){
   
    response.pipe(bl(function (err,data){
        if(err) console.error(err)
        
        output[value]=data.toString();
        counter++;
        
        if(counter==3) {showOutput();}
           }));
   
  
    
});

}

function showOutput(){
    for(var i=0;i<3;i++){
        console.log(output[i]);
    }
}