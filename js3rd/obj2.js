/**
 * Created by huk on 17/3/11.
 */
//工厂模式
function foo(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        console.log(this.name);
    };
    return o;
}
//var per = foo('huk',23);
//console.log(per.name);

//构造函数模式
function Foo2(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log(this.name)
    }
}
// var per = new Foo2('huk1',23);
// console.log(per.sayName());

//原型模式
function Foo3() {

}
Foo3.prototype.name = 'huk3';
Foo3.prototype.age = 21;
Foo3.prototype.sayName = function () {
    console.log(this.name);
};
var per = new Foo3();
per.sayName();  //huk3
var per2 = new Foo3();
per2.sayName(); //huk3
//per.sayName == per2.sayName true
