const http = require('node:http')

const server = http.createServer(function(req,res){
    console.log(`I got an incoming request!`);
    //db..
    res.writeHead(200)
    res.end("thanks for visiting")
    

})

server.listen(8000, function(){
    console.log(`HTTP server running on port 8000`);
    
})