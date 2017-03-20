/**
 * Created by huk on 17/3/20.
 */
function Person() {
    this.eyes = 2;
}
Person.prototype.sayHi = function () {
    console.log('hi')
};
Person.prototype.born = function () {
    this.sayHi();
    console.log('has born')
};
function girl() {
    var girl = new Person();
    girl.sex = 'girl';
    var born = girl.born;
    girl.born = function () {
        born.call(this);
        console.log('sex is '+this.sex);
    };
    return girl;
}

var kid = new girl();
kid.born();

