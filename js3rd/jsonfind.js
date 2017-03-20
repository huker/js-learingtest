/**
 * Created by huk on 17/3/14.
 */
var arr = [{"name":"huk1"},{"name":"huk2"},{"name":"huk3"},{"name":"huk4"}];

for(var i in arr){
    if(arr[i]["name"] == 'huk3'){
        console.log(arr[i])
    }
}

