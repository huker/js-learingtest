/**
 * Created by huk on 17/3/13.
 */
function foo() {
    var result = new Array();
    for(var i = 0;i<10;i++){
        result[i] = (function (num) {
            return function () {
                return num
            }
        })(i)
    }
    return result
}

function foo1(count) {
    for(var i=0;i<count;i++){
        console.log(i)
    }
    console.log(i)
}
foo1(10)