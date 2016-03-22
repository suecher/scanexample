/**
 * Created by SueCh on 2016/3/19.
 */

console.info('----Async series 异步编程  -------');

var async = require('async');
var i = 0;
function add(a,callback){
    a = 10;
    callback(a);
};

add(i,function(obj){
    console.log(obj);
});

console.log(i);

//console.log()




async.series([
    function(callback){

        var s = 0;

        callback(null,'hello');
    },
    function(callback){
        s = 10;
        callback(null,'async');
    },
    function(callback){
        s += 5;
        callback(null,'series');
    }
],function(err,results){
    console.log(results);
    console.log(s);
});

