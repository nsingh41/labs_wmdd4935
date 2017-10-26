
let mymodule=require('./mymodule.js');
let directory = process.argv[2];
let filt = process.argv[3];



mymodule(directory,filt,function(err, list){
  if (err) {
    return console.error(err)
    
  }
  
  
  list.forEach(function(file){
       console.log(file);
  });
 
});





