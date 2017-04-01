/**
 * Created by huk on 17/3/21.
 */
function async(fn) {
    var old = fn,
        intv = setTimeout(function () {
            // intv = null;
            if(fn){
                console.log('ok2')
                fn();
            }
        },0);
    fn = null;
    return function () {
        if(intv){
            //触发太快,intv定时器里面的内容还没进行
            console.log('11');
            console.log([this].concat())
            fn = old.bind.apply(old,[this].concat([].slice.call(arguments)));
            console.log(old)
            console.log(fn)
            // fn();
            // fn.apply(this,arguments)
        }else{
            //异步情况
            console.log('22');
            old.apply(this,arguments);
        }
    }
}

function result(data) {
    console.log(a);
}
var a = 0;
setTimeout(async(result),10);
a++;