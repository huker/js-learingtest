var Foo = new Function('a','b','return a+b');

var foo = new Foo();

console.log(foo instanceof Object);
console.log(foo instanceof Foo);


console.log(Foo);
console.log(foo(1,2));