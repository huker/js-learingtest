/* 方法1
function add(){
    var result=0;
    for(var i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    console.log(result)
}*/


/* 方法2
function add(){
    var result=0;
    var arr=Array.prototype.slice.call(arguments);
    arr.forEach(function(item){
        result+=item;
    });
    console.log(result);
}*/
//add(2,5);

var result=0;
function add(num){
    result+=num;
    return add;
}
add(2)(5);