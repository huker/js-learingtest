//var getRandomColor = function(){
//    return  '#' +
//        (function(color){
//            return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
//            && (color.length == 6) ?  color : arguments.callee(color);
//        })('');
//};
//
//
//var a=getRandomColor();
//console.log(a);
//
//var arr=[2,4,5,6,1,3,4];
//var arr2=arr.sort().reverse();
//console.log(arr2);
//arguments.callee就是递归 当前函数
//var a=(function(n){
//
//    if(n > 1){
//        return n* arguments.callee(n-1);
//    }else{
//        return n;
//    }
//
//})(3);
//
//console.log(a);

//var a='0123456789abcdef';
//console.log(a.charAt(10));

//var getColor=function(){
//    var check='0123456789abcdef';
//    var color='#';
//    for(var i=0;i<6;i++){
//        color+=check.charAt(Math.floor(Math.random()*16));
//    }
//    return color
//};
//
//console.log(getColor());

Array.prototype.unique3 = function(){
    var res = [];
    var json = {};
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
};

var arr = [112,112,34,'你好',112,112,34,'你好','str','str1'];
console.log(arr.unique3());