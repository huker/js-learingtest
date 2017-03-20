var arr1=[1,2,3,4];
var arr2=[];
// while(arr1.length) {
//     var num=arr1.pop();
//     arr2.push(num);
// }

// var arr3 = arr1.map(function (item) {
//     console.log(arguments)
//     return item
// });
var arr3 = [];
arr1.map(function (value,i) {
    arr3[arr1.length-1-i] = value
})

console.log(arr3)
