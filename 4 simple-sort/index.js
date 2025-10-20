function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function simpleSort(arr) {
  let newArr = [];

  while (arr.length > 0) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return newArr;
}

const data = [5, 3, 6, 2, 10];

console.time("sortBy");
console.log(simpleSort(data));
console.timeEnd("sortBy");