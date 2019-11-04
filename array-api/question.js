// reduce 处理包含对象的数组 先把复杂的数组变成简单数组
let arr = [{a: 1, b: 2}, {a: 0}, {a: 4}];
let newArr = arr.map(item => {
  return item.a;
})
let value = newArr.reduce(function(total, currentValue, i, arr) {
  return total + currentValue;
})

// total每次累加的值，curr是当前元素的值
let temp = arr.reduce((total, curr) => {
  console.log(typeof curr)
  return total.a + curr.a
})

console.log(value);
