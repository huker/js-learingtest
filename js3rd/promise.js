/**
 * Created by huk on 17/3/23.
 */
// var a = Promise.resolve(21);
// console.log(a)

function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve,time);
    })
}
//
// delay(1000)
// .then(function () {
//     console.log('1s after');
//     return delay(2000)
// })
// .then(function () {
//     console.log('2s after');
// })
// .then(function () {
//     console.log('next')
// })

//---------------------------------------
// for (var i = 0; i < 5; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(new Date, j);
//         }, 1000 * j);
// })(i);
// }
//
// setTimeout(function() { // 这里增加定时器，超时设置为 5 秒
//     console.log(new Date, i);
// }, 1000 * i);

var task = [];
for(var i = 0; i<5; i++){
    (function (j) {
        task.push(new Promise(function (resolve) {
            setTimeout(function () {
                console.log(new Date,j)
                resolve();
            },j*1000)
        }))
    })(i)
}
Promise.all(task).then(function () {
    setTimeout(function () {
        console.log(new Date,i);
    },1000)
});