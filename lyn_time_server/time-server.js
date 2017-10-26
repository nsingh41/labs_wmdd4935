var net =require('net');

var server=net.createServer(function(socket){
  socket.end(get()+'\n');  
})

server.listen(Number(process.argv[2]));

function get(){
    var date=new Date();
    return date.getFullYear() 
    + "-" + addZero(date.getMonth()+1) 
    + "-" + addZero(date.getDate() )
    + " "+ addZero(date.getHours())
    + ":" + addZero(date.getMinutes());
}

function addZero(i){
    
    if(i<10) {return '0'+i;}
    else{ return i;}
    
}