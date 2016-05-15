//通过new Function来创建一个函数对象
var Foo = new Function("a","b","return a+b");

//创建Foo函数的时候 自动送一个Foo.prototype对象
var f1= new Foo();


//instanceof是判断 前面的__proto__能不能找到后面的prototype
//左侧是对象实例 右侧是构造函数
console.log(f1 instanceof Foo);
console.log(f1 instanceof Object);


//Foo.prototype也是对象,是由new Object()创建的所以它的__proto__指向Object.prototype

console.log(Foo.prototype.__proto__ === Object.prototype);

var a = new Object();
//创建对象的实例的__proto__ 等于 构造函数的prototype
console.log(a.__proto__ === Object.prototype);