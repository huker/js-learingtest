/**
 * Created by hu on 2016/2/24.
 */
var a={};
var b={key:'b'};
var c={key:'c'};
a[b]=123;
console.log(Object.keys(a));
a[c]=456;
console.log(Object.keys(a));
console.log(a[b]);//456
/*
* 第一个console a的属性是[object object]
* 第二个也是
* 把b作为属性时 就是把'[object object]'这个字符串作为属性
* 不管是什么对象 转成字符串后都是'[object object]'
* 所以a[c]才会覆盖a[b]
* */