/**
 * Created by huk on 17/3/9.
 */
function A(options) {
    this.a = 3;
    for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
            this[prop] = options[prop];
        }
    }
}
function B(ag) {
    A.call(this,ag);
    this.b = 4;
}
//方法1
// var prop =Object.create(A.prototype);
// prop.constructor = B;
// B.prototype = prop;

//方法2
B.prototype = new A();
B.prototype.constructor = B;

var b = new B({ c: 8 });
console.log(b instanceof A);//true
console.log(b.constructor === B);//true
console.log(b.a);//3
console.log(b.b);//4
console.log(b.c);//8