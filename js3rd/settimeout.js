/**
 * Created by huk on 17/3/14.
 */
for (var i = 1; i < 4; i++) {
    var t = setTimeout(function(i) {
        console.log(i);
        console.log(t);
        clearTimeout(t);
    }, 10, i);
}
// console.log(i);