/**
 * Created by hu on 2015/10/31.
 */
function person(name){
    var _this={};
    _this.name=name;
    _this.sayHello=function(){
        alert('mianhello'+this._name);
    };
    return _this;
}
function teacher(name){
    var _this=person(name);
    var superSay=this.sayHello;
    _this.sayHello=function(){
       superSay.call(_this);
        alert('shello'+_this._name);
    };
    return _this;
}
var t=teacher();
t.sayHello();
