// of 传入的参数变成数组的元素
/**
 * @item1, item2
*/
var result = Array.of(4, 2);
// console.log(result); // result [4， 2]

// 兼容性问题
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}

// copyWithin 复制目标数组中相对位置的元素 target start end
/*
  *@target 目标数组
  *@start 开始位置 正数 从开头开始 从0 算起 负数则从尾部算起 不包括开始位置的元素
  *@target 拷贝位置 
*/
var target = [1, 2, 3, 5, 7];
var arr1 = target.copyWithin(target, 2, 4);
// console.log(arr1);  // [3, 5, 3, 5, 7]

// every 所有元素都满足条件 返回true
var entires1 = [1, 2, 3, 4];
var every1 = entires1.every((item) => {
  return item >= 1;
}, this);
console.log(every1);
