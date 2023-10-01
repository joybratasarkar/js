function twoSum(nums, target) {
    const hashSet = {};
    return  nums.reduce((acc, cur, index) => {
        const complement = target - cur  ;
        if (hashSet[complement] !== undefined) {
            acc.push(hashSet[complement], index);
        }
        hashSet[cur] = index;
        return acc;
    }, [])
};
// function twoSum(nums, target) {
//     const numMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//       if (numMap.has(complement)) {
//         return [numMap.get(complement), i];
//       }
//       numMap.set(nums[i], i);
//     }
//     return null;
//   }
  

var a = [ 1, 1,2, 7]
var target = 9
var data = twoSum(a, target)

console.log('data', data);
