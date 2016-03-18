var express = require('express')
,app = express()
,server = require('http').createServer(app)
,io = require('socket.io').listen(server);

var userlist = [];

server.listen(3001);


app.route('/')
    .get(function(req,res){
        res.sendfile('./public/index.html');
    });


io.sockets.on('connection',function(socket){
    socket.emit('news',{hello:'world'});

    socket.on('other event',function(data){
        console.log(data);

    });
    console.log(socket.username);


});

