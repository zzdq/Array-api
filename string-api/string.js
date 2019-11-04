// charAt 下标数值位置的元素
var charAtStr = 'charAt';
// console.log(charAtStr.charAt(2)); // a

// concat 将字符串合并成一个字符串
var concatStr1 = 'a';
var concatStr2 = 'b';
// console.log(concatStr1.concat(concatStr2)) // ab

//indexOf 检索字符串的里是否包含某个字符串
var indexOfStr = 'abcdefghijk';
// console.log(indexOfStr.indexOf('f')); // 返回在字符串中的下标

// match 检索字符串内的指定值，一个或多个正则表达式的匹配
var matchStr = 'qweqweqw';
// console.log(matchStr.match(/\q+/g)); // [ 'q', 'q', 'q' ]
// console.log(matchStr.match('eq')); // [ 'eq', index: 2, input: 'qweqweqw', groups: undefined ]

// slice 提取字符串的每个部分，以新的字符串返回被提取的部分 stringObject.slice(start,end)
var sliceStr = 'qeeqssadaf';
// console.log(sliceStr.slice(1, 3)); // ee

//split 把字符串分割成字符串数组 stringObject.split(separator,howmany)
var splitStr = 'qweqeadq';
// console.log(splitStr.split('')) // [ 'q', 'w', 'e', 'q', 'e', 'a', 'd', 'q' ]

// substr 截取从start下标开始的指定数目的字符 stringObject.substr(start,length)
var substrStr = '112asdasd';
// console.log(substrStr.substr(1, 3)); // 12a

// substring 用于提取字符串中两个指定下标之间的字符 stringObject.substring(start,stop)
var substringStr = '12312323asad';
// console.log(substringStr.substring(1, 3)); // 23


// toString 
var str = [1, 2, 3, 4];
console.log(str.toString()); // 1,2,3,4
