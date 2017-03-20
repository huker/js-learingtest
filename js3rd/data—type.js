/**
 * Created by huk on 17/3/9.
 */
var b = null;
if(!b && typeof b === 'object'){
    console.log('1')
}

var c= new Object({a:'1'});
console.log( c instanceof Object)

var dd = 070;
console.log(dd)

var num1 = -0;
var num2 = +0;
console.log(num1 === num2);

var num44 = 0/0;
if(num44!=num44){
    console.log('is NaN')
}