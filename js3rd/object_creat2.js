/**
 * Created by huk on 17/3/20.
 */
function foo(who) {
    this.me = who;
}

foo.prototype.identity = function () {
    return "I am "+this.me;
};

function bar(who) {
    foo.call(this,who);
}
bar.prototype = Object.create(foo.prototype);
bar.prototype.speak = function () {
    console.log("hi,"+this.identity());
};
// function bar(who) {
//     var bar = new foo(who);
//     bar.speak = function () {
//         console.log("hi,"+bar.identity());
//     };
//     return bar
// }
var b1 = new bar('huk1');
var b2 = new bar('huk2');

b1.speak();
b2.speak();