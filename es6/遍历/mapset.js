var arr = ['a','b','c'];
arr.name = 'haha';

//for(var x of arr){
//    console.log(x);
//}

//forEach

var set = new Set(['a','b','c']);
set.forEach(function(element,sameElement,set){
   console.log(element+','+sameElement);
    console.log(set);
});


var map = new Map([[1,'x'],[2,'y'],[3,'z']]);
map.forEach(function(value,key,map){
    console.log(value+','+key);
    console.log(map);
});