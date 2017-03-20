/**
 * Created by huk on 17/3/9.
 */
function Foo(name,age) {
    this.a = name;
    this.b = age;
    this.say = function () {
        console.log(this.a)
    }
}
var ha = new Foo('hi',11);
console.log(ha);

function foo1(name, age) {
    var o = new Object();
    o.a = name;
    o.b = age;
    o.c = function () {
       console.log(this.a)
    }
    return o
}

var ha1 = foo1('hihi',23);
