// of 传入的参数变成数组的元素
/**
 * @item1, item2
*/
var result = Array.of(4, 2);
console.log(result); // result [4， 2]

// 兼容性问题
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
