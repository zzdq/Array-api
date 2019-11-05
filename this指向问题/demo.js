/*
  *this指向问题
  *匿名函数指向window
  *this指向执行时最后调用它的对象
*/
var myObj = {
  foo: 'bar',
  func: function () {
    var self = this;
    console.log(this.foo); // bar
    console.log(self.foo); // bar
    (function () {
      // console.log(this); // window
      console.log(this.foo); // underfine
      console.log(self.foo); // bar
    }());
  }
};

// myObj.func();

// 一般函数方法的this指向全局对象
function test() {
  this.x = 1;
  console.log(x);
}
// test();

// 作为对象方法调用，this指向上级对象，数组同理
var obj = {
  name: 'obj',
  func1: function () {
    console.log(this.name);
  }
}
// obj.func1(); // obj 函数调用
var obj1 = obj.func1;
// obj1(); // 指向全局

// 函数作为window内置函数的回调函数调用 this指向全局 setTimeout
// setTimeout(() => {
//   console.log(this.name);
// }, 0);

// 作为构造函数调用，this指向new实例化的对象
function test1() {
  this.x = 1;
}
var o = new test1();
// console.log(o.x); // 1

// apply、call、bind改变函数的调用对象，此方法的第一个参数为改变后调用这个函数的对象
var x = 0;
function test2() {
  console.log(this.x);
}
var obj2 = {};
obj2.x = 1;
obj2.m = test2;
// obj2.m.apply(); // 0 apply、call参数为空时，默认调用全局对象
// obj2.m.call(obj2); // 1

// 匿名函数指向全局对象

var a = 3;
var b = 4;
var obj = {
  a: 1,
  b: 6,
  getX: function() {
    var a = 5;
    return function() {
      return this.a;
    }();
  },
  getY: function() {
    var b = 7;
    return this.b;
  }
};
// console.log(obj.getX()); // 返回的是一个匿名函数，匿名函数指向全局
// console.log(obj.getY()); // 作为对象的方法调用