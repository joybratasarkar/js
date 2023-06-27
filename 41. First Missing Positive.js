/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const positiveNums = nums.filter(num => num > 0);
    const max = Math.max(...positiveNums);
    const min = Math.min(...positiveNums);
  
    if (min > 1) {
      return 1;
    }
  
    for (let i = 1; i <= max + 1; i++) {
      if (!positiveNums.includes(i)) {
        return i;
      }
      console.log('max',max);
    }
    return max + 1;
  };


// console.log(Math.max(1, 3, 2));

var nums = [3,4,-1,1]




var data = firstMissingPositive(nums);
console.log('data', data);

