// 1. Медленная сортировка через перебор
// function findSmallest(arr, fn) {
//   let smallest = fn(arr[0]);
//   let smallestIndex = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     if (smallest > fn(arr[i])) {
//       smallest = fn(arr[i]);
//       smallestIndex = i;
//     }
//   }
//
//   return smallestIndex;
// }
// function sortByFunction(arr, fn) {
//   let newArr = [];
//
//   while (arr.length > 0) {
//     let smallest = findSmallest(arr, fn);
//     newArr.push(arr[smallest]);
//     arr.splice(smallest, 1);
//   }
//
//   return newArr;
// }

// 2. Быстрая сортировка через метод sort
function sortByFunction(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

const data = [[3, 4], [5, 2], [10, 1]];
const fn = (x) => x[1]

console.time("sortBy");
console.log(sortByFunction(data, fn));
console.timeEnd("sortBy");