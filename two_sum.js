function twoSum(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
}


   var a=[2,7,11,15]
  var target = 26
 var  data= twoSum(a,target)
 console.log('data',data);

function containsDuplicate(nums) {


    const isDuplicate = nums.some((item, index) =>
    {
     return   index !== nums.indexOf(item)
    }
     );

    if (!isDuplicate) {
        return false
    } else {
        return true
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     let hashSet = new Set()
//     for(let num of nums){
//         if(hashSet.has(num)){
//         return true
//         } 
//             hashSet.add(num)       
//     }
//      return false
// };
nums = [1, 2, 3, 4,4]
var a = containsDuplicate(nums);
console.log(a);
























function permuteArray(arr) {
    console.log(arr);
    const permutations = [];
  
    function generatePermutations(currentArr, remainingArr) {
        console.log(remainingArr);

      if (remainingArr.length === 0) {
        permutations.push(currentArr);
        return;
      }
  
      for (let i = 0; i < remainingArr.length; i++) {

        const updatedCurrentArr = [...currentArr, remainingArr[i]];
        // console.log('updatedCurrentArr',updatedCurrentArr);
        const updatedRemainingArr = remainingArr.filter((_, index) => {
            index !== i
        });
        console.log('updatedRemainingArr',updatedRemainingArr);
        generatePermutations(updatedCurrentArr, updatedRemainingArr);
      }
    }
  
    generatePermutations([], arr);
  
    return permutations;
  }
  
  // Example usage
  const array = [1, 2, 3];
  const permutations = permuteArray(array);
  console.log(permutations);