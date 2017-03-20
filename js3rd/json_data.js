// 数据源
var arr = [
    {"address": "四川汶川", "count": 1, "value": 1.5},
    {"address": "云南玉龙", "count": 20, "value": 2.2},
    {"address": "四川自贡", "count": 2, "value": 1.4},
    {"address": "四川木里", "count": 1, "value": 1.7},
    {"address": "甘肃天祝", "count": 4, "value": 1.8},
    {"address": "云南玉龙", "count": 30, "value": 2.1},
    {"address": "四川木里", "count": 100, "value": 1.1},
    {"address": "云南鲁甸", "count": 2, "value": 1.3},
    {"address": "云南玉龙", "count": 1, "value": 2.2},
];

// 目标结构,count求和,并归类value,以及按照count排序;{'四川木里':{count:2,value:[1.1,1.7]},'云南玉龙':{count:100,value[1.2,1.8]}}

var arr2 = [];

for(var i=0 ; i<arr.length; i++){
    var add = arr[i]['address'];   //获取当前的地区
    var arrCur = [arr[i]];         //新建一个临时的数组,作为待比较源;

    //把所有同一个城市的数据放到.临时数组里
    for(var j=i+1 ; j<arr.length ; j++){
        if(arr[j]['address'] == add){
            arrCur.push(arr[j]);
            arr.splice(j,1); //每放进一个则删除一个,目的是为了在外层循环的时候去重
            j--; //如果删除了,指针再回退一个
        }
    }

    var obj = {},
        count = 0,
        value = [];

    for(var k = 0 ; k<arrCur.length ; k++){
        count += arrCur[k]['count'];

        //这里对value再进行一次去重,没有的才push进去
        if (value.indexOf(arrCur[k]['value'])== "-1" ){ //es5新方法;
            value.push(arrCur[k]['value'])
        }
    }

    obj[add] = {
        count: count,
        value: value
    };
    obj['count'] = count; //为了方便后续用sort排序,这里做一个冗余;
    arr2.push(obj)
}

//排序
arr2.sort(function(a,b){
    return a.count - b.count
});

for(var i=0; i<arr2.length;i++){ //删除掉冗余..;
    delete arr2[i].count;
}

console.log(arr2);
