/**
 * Created by hu on 2016/4/27.
 */
var arr=[1,2,3,4,5];

//过滤
var newarr=arr.filter(function(num){
   return num>1;
});

//用新的替换以前的
var arr2=arr.map(function (num) {
    return num+10;
});

console.log(newarr);
console.log(arr2);