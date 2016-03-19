var express = require('express');
var path = require('path')
,app = express()
,server = require('http').createServer(app)
,io = require('socket.io').listen(server);

var userlist = [];

server.listen(3001,'192.168.1.254');

app.use(express.static(path.join('./public')));

app.route('/')
    .get(function(req,res){
        res.sendfile('./public/index.html');
    });


io.sockets.on('connection',function(socket){

    socket.emit('news',{hello:'world'});

    socket.on('other event',function(data){



        if(userlist.filter((n) => n.uid == data.username).length > 0){
            console.log(data.username + ":用户已存在");
        } else {
            userlist.push({uid:data.username,socket:socket});
            console.log("新加入用户:" + data.username);
        }

        //if(userlist.indexOf(data.username) != -1){
        //    console.log(data.username + ":用户已存在");
        //} else {
        //    console.log("新加入用户:" + data.username);
        //    userlist.push(socket);
        //
        //}

        console.log(userlist.length);

    });


    socket.on('disconnect',function(socket){
        console.log(socket);
    });

    socket.on('room1',function(data){
        var u2 = userlist.filter((n) => n.uid == '002')[0];
        u2.socket.emit("room1",{msg:'001发来的信息'});
        //console.log(socket);
    });



    //console.log(socket.username);


});

