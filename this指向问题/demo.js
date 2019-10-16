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

myObj.func();
