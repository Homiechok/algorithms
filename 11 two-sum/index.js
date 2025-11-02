function twoSum(nums, target) {
  const arr = new Map();
  let index = 0;

  for (let num of nums) {
    let iValue = target - num;

    if (arr.has(iValue)) {
      const i = arr.get(iValue);
      return [i, index];
    } else {
      arr.set(num, index);
    }

    index++;
  }
}

const nums = [3, 4, 5, 6];

console.time("twoSum");
console.log(twoSum(nums, 9));
console.timeEnd("twoSum");
