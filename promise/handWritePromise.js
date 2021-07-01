/*
 * @Author: zdk 
 * @Date: 2019-11-04 17:02:56 
 * @Last Modified time: 2019-11-04 17:02:56 
 */
function Promise(executor) {
  var _this = this;
  this.status = 'pending';
  this.value = undefined;
  this.reason = undefined;
  // 回调数组，状态改变一次调用
  this.onFulfilledFunc = []; // 成功回调
  this.onRejectedFunc = []; // 失败回调

  function resolve(value) {
    // 当状态为pending是才能更新
    if (_this.status === 'pending') {
      _this.value = value;
      // 依次调用onFulfilledFunc保存的回调函数，然后改变状态
      _this.onFulfilledFunc.forEach(function(fn) {
        fn(value);
      });
      _this.status = 'resolved';
    }
  }
  function reject(reason) {
    // 当状态为pending是才能更新
    if (_this.status === 'pending') {
      _this.reason = reason; // 保存失败原因
      _this.onRejectedFunc.forEach(function(fn) {
        fn(reason);
      });
      _this.status = 'rejected';
    }
  }
  // 马上执行
  try {
    executor(resolve, reject);
  } catch (r) {
    executor(r);
  }
}

/**
 * 解析then返回值与新Promise对象
 * @param {Object} promise2 新的Promise对象 
 * @param {*} x 上一个then的返回值
 * @param {Function} resolve promise2的resolve
 * @param {Function} reject promise2的reject
*/
function resolvePromise(promise2, x, resolve, reject) {
  // 返回自己的promise对象，状态永远为pending
  if (promise2 === x && x !== undefined) {
    reject(new TypeError('类型错误'));
  }
  
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 对象或是函数且不为对象里包含then属性的参数
    try {
      let then = x.then; // 取出then方法引用
      // 函数就执行
      if (typeof then === 'function') {
        then.call(x, function(y) {
          // 递归调用，直到的返回的不是promise对象为止
          resolvePromise(promise2, y, resolve, reject);
        }, function(r) {
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

// then 定义在原型上
Promise.prototype.then = function (onFulfilled, onRejected) {
  let promise2;
  // 异步的请求的状态变为成功，递归调用resolvePromise
  if (this.status === 'resolved') {
    // x有可能是promise对象，也有可能是一个普通值
    promise2 = new Promise(function(resolve, reject) {
      // 异步请求
      setTimeout(function() {
        try {
          let x = onFulfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (r) {
          reject(r)
        }
      }, 0);
    })
  }
  if (this.status === 'rejected') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (r) {
          reject(r)
        }
      }, 0);
    })
  }
  // 当状态为pending，将每一次then的结果传递给下一步操作，直到返回的是一个普通值
  if (this.status === 'pending') {
    var that = this // 保存上下文
    promise2 = new Promise(function(resolve, reject) {
      that.onFulfilledFunc.push(function() {
        // x可能是一个promise对象，也可能是一个普通值
        setTimeout(function() {
          try {
            let x = onFulfilled(that.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (r) {
            reject(r);
          }
        }, 0);
      });
      that.onRejectedFunc.push(function() {
        setTimeout(function() {
          try {
            let x = onRejected(that.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (r) {
            reject(r);
          }
        }, 0);
      });
    });
  }
  return promise2;
};

new Promise(function(resolve, reject) {
  console.log('执行了');
  resolve();
}).then(function(res) {
  console.log(res);
}).then(function(res) {
  console.log(2);
});
