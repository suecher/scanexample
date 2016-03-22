/**
 * Created by Administrator on 2016/3/22.
 */
var express = require('express');
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');


var app = express();
app.listen(3000);


app.route('/')
    .get(function(req,res){
        res.sendfile('./public/index.html');
    });


app.route('/file/uploading')
    .post(function(req,res){
        //生成multiparty对象，配置上传目标路径
        var form = new multiparty.Form({uploadDir:'./public/files/'});

        //上传完成后处理
        form.parse(req,function(err,fields,files){
            var filesTmp = JSON.stringify(files,null,2);
            console.log(filesTmp);
            if(err){
                console.log('parse error:' + err);
            } else {
                console.log('arse files:' + filesTmp);
                var inputFile = files.inputFile[0];
                var uploadedPath = inputFile.path;
                var dstPath = './public/files/' + inputFile.originalFilename;


                fs.rename(uploadedPath,dstPath,function(err){
                    if(err){
                        console.log('rename error:' + err);
                    } else {
                        console.log('rename ok');
                    }
                });
            }


            res.writeHead(200, {'content-type':'text/plain:charset=utf-8'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: filesTmp}));
        });
    });