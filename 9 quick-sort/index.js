function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let less = [];
  let greater = [];

  for (let val of arr) {
    if (val === pivot) continue;

    if (val < pivot) {
      less.push(val);
    } else greater.push(val)
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const arr = [3, 5, 1, 9, 2, 99, 0];

console.time("quickSort");
console.log(quickSort(arr));
console.timeEnd("quickSort");
