// 要新数组还是修改原数组？ 明确你的需求。如果不想修改原数组，优先使用 map, filter, slice, concat 等方法。
// 需要遍历并转换？ 使用 map。
// 需要遍历并筛选？ 使用 filter。
// 需要加或合并所有元素？ 使用 reduce。
// 需要查找某个元素或其索引？ 使用 find, findIndex, indexOf, includes。
// 需要检查所有或部分元素是否满足条件？ 使用 every, some。



const arr4 = [1, 2, 3, 4];
let sum = 0
const d = arr4.forEach(item => {
  sum = sum + item;
  console.log(`item is ${item}. sum is ${sum}`)
})
