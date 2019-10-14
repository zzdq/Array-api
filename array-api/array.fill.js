// fill value start end
/**
 * @value 填充元素
 * @start 开始位置
 * @end 结束位置
*/
var fillArr = [1, 2, 3];
var arr = fillArr.fill(4, 2, 3);
// console.log(arr); // [1, 2, 4]

/* ************************************* */

// filter 筛选符合条件的元素
/**
 * @value 数组的每一项元素
 * @index 正在处理的下标
 * @arr 原数组
*/
var fillArr = [1, 2, 3, 5, 12];
var arr = fillArr.filter((value, index, arr) => {
  return value > 5;
}, this);
// console.log(arr); // [12]

/* ************************************* */
// map 每一项都处理 
/**
 * @value 数组的每一项元素
 * @index 正在处理的下标
 * @arr 原数组
*/
var mapArr = [1, 2, 3, 4];
var newMap = mapArr.map((value, index, arr) => {
  return value * 2;
}, this);
// console.log(newMap); 
// return value > 2; [false, false, true, true]
// return value * 2; [2, 4, 6, 8]

// every 所有元素都满足条件 返回true
var entires1 = [1, 2, 3, 4];
var every1 = entires1.every((item) => {
  return item >= 1;
}, this);
// console.log(every1); // true

// some 有一项满足返回true

/* ************************************* */

// flat (兼容性差) 递归遍历数组，返回一个新的数组，展开多维数组

/* ************************************* */

// indexOf和includes 判断元素是否在数组内
/*
  *indexOf value -> 需要查找的元素 index 开始查找的下标
  *includes value -> 需要查找的元素 index 开始查找的下标 
  *区别   indexOf 只用于数组  includes 数组和类数组
*/
var status = null;
var maxArr = [1, 2, 3, 5];
status = maxArr.indexOf(2); // 1
status = maxArr.includes(3); // true

/* ************************************* */

// join 数组元素以分隔符分隔变成字符串
var joinArr = ['a', 'b', 'c', 'd', 'e', 'f'];
var newJoin = joinArr.join('');
console.log(newJoin);