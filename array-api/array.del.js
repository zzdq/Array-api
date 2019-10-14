var arr = [1, 2, 3, 4, 5];
// pop 删除数组的最后一个元素,返回删除的元素
var arrPop = arr.pop();
// console.log(arrPop); // 5

// shift  删除数组的开头一个元素，返回删除的元素
var appShift = arr.shift();
// console.log(appShift); // 1

// push 往数组最后添加一个元素 返回添加元素后数组的长度
var arrPush = arr.push(32);
// console.log(arrPush); // 4

// unshift 开头位置添加元素 返回添加元素后数组的长度
var arrUnShift = arr.unshift(12);
// console.log(arrUnShift); // 4

// slice 截取指定位置的元素，返回一个新的数组 (包括开始位置，不包括结束位置)
var arrSlice = [1, 2, 3, 4, 5, 6];
var Slice = arrSlice.slice(1, 4);
// console.log(Slice); // [2, 3, 4]

/*
  *reduce 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值
  *不能添加this
*/
/*
  *previoussValue 正在处理的上一个元素
  *currentValue 正在处理的元素
  *currentIndex 正在处理的元素下标
  *arr 调用reduce的数组
*/
var arrReduce = [1, 2, 3, 4, 5];
var reduce_val = arrReduce.reduce((previousValue, currentValue, currentIndex, arr) => {
  return previousValue + currentValue;
});
// console.log(reduce_val); // 15

var reduce_right = arrReduce.reduceRight((prev, curr, index, arr) => {
  return prev + curr;
});
// console.log(reduce_right); // 15
