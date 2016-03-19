/**
 * Created by Administrator on 2016/3/18.
 */


var u1 = {uid:'001',username:"u1",client:"IE"};
var u2 = {uid:'002',username:"u2",client:"Chrome"};
var u3 = {uid:'003',username:"u2",client:"Chrome"};

var userlist = [];

userlist.push({uid:u1.uid,socket:u1});
userlist.push({uid:u2.uid,socket:u2});
userlist.push({uid:u3.uid,socket:u3});

//userlist.push("scan");
//userlist.push("balas");

//for(var key in userlist){
//    console.log(userlist[key]);
//}


//userlist.forEach((item,index) => {
//    console.log(item,index);
//});

var userlist2 = userlist.filter((n) => n.uid == '005').length;

console.log(userlist2);

//console.log(userlist.indexOf() != -1);
