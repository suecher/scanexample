/**
 * Created by SueCh on 2016/3/20.
 */

var u1 = {
    id:'001',
    username:'scan',
    realname:'舒璨'
};

var u2 = {
    id:'002',
    username:'atom',
    realname:'水果忍者'
};

var u3 = {
    id:'003',
    username:'balas',
    realname:'小玉'
};

var userlist = {};
userlist[u1.id] = u1;
userlist[u2.id] = u2;
userlist[u3.id] = u3;

console.log(userlist);

//delete userlist['005'];

while(true)
{
    console.log(55);
    break;
}

console.log(Math.round(10));



var n = undefined;

if(!n){
    console.log('真的');
}else{
    console.log('假的');
}

var ar = [10,20,30,50,60,70,80];
var point = 78;

var level = 0;

for(i in ar){
    if(point > ar[i]){
        level = i;
    }
}

console.log(level);
