// from 将类数组或者是迭代的元素转为数组
/**
 * @string 
 * @set 
 * @map
*/
var result = Array.from('abc', function (item, index) {
  // 'a' 'b' 'c'
  return item;
});
// console.log(result); // result ['a','b','c']

// set  原样返回
var set = ['123', [1], 123];
var newSet = Array.from(new Set(set));
console.log(newSet); // [ '123', [ 1 ], 123 ]

// map 和set类似

// isArray 判断是否为数组元素
// console.log(Array.isArray(result)); // true

// 数组去重 函数传递的参数会在arguments里面 Array.from()返回一个新的数组
function combine() {
  var arr = [].concat.apply([], arguments);
  return Array.from(new Set(arr));
}
var a = [1, 2, 3];
var b = [1, 3, 4];
// console.log(combine(a, b)); // [1, 2, 3, 4]
