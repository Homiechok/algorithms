function binarySearch(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let result = nums[mid];

    if (target === result) return mid;
    if (target < result) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
}

const nums = [1, 3, 5, 7, 9];
const target = 3;

console.time("binarySearch");
console.log("isSuccess:", binarySearch(nums, target) !== -1);
console.log("Index:", binarySearch(nums, target));
console.timeEnd("binarySearch");