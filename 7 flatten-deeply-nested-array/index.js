function flat(arr, n) {
  const newArr = [];

  if (n === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const sunArr = flat(arr[i], n - 1);
      newArr.push(...sunArr);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, [10], 11], 12], [13, 14, 15]];

console.time("flat");
console.log(flat(arr, 2))
console.timeEnd("flat");