/**
 * Created by hu on 2015/10/31.
 */
(function(){
    var n='ipt';
    function people(name){
        this._name=name;
    }
    people.prototype.sayHello=function(){
        alert('mianhello'+this._name+n);
    };
    window.people=people;
}());
(function () {
    function student(name){
        this._name=name;
    }
    student.prototype=new people();
    var supersay=student.prototype.sayHello;
    student.prototype.sayHello=function(){
        supersay.call(this);
        alert('shello'+this._name);
    };
    window.student=student;
}());

var s=new student("haha");
s.sayHello();