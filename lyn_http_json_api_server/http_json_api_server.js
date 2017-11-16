let http=require('http');
let url=require('url');

function parseTime(time){
    return{
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
    }
}

function unixtime(time){
    return{unixtime:time.getTime()}
}

let server=http.createServer(function(req,res){
    
    
    let parsedUrl=url.parse(req.url,true);
    let time=new Date(parsedUrl.query.iso);
    let result;
    
    if(/^\/api\/parsetime/.test(req.url))
    result=parseTime(time);
    else if(/^\/api\/unixtime/.test(req.url))
    result=unixtime(time);
    
    if(result){
        res.writeHead(200,{'content-Type':'application/json'});
        res.end(JSON.stringify(result))
        
    }
    else{
        res.writeHead(404);
        res.end();
    }
    
});

server.listen(Number(process.argv[2]));