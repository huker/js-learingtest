var obj = {
    a:2
};

var myObj = Object.create(obj);

console.log(myObj.a);

for(var i in myObj){
    console.log(i);
}

console.log(("a" in myObj));