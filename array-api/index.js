/* 
  数组去重
*/
const repeatedArray = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}]

// 利用ES6 Set去重（ES6中最常用）
Array.from(new Set(repeatedArray))
const arr = [...new Set(arr)] 

// 二、利用for嵌套for，然后splice去重（ES5中最常用）
// 三、利用indexOf,includes去重