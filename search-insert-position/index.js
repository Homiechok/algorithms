function searchInsertPosition(nums, target) {
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

  return min;
}

const nums = [1, 3, 5, 6];
const target = 4;

console.time("binarySearch");
console.log("Index:", searchInsertPosition(nums, target));
console.timeEnd("binarySearch");