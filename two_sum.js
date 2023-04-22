function twoSum(nums, target) {
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // console.log('complement',complement);
        // console.log('hash',hash);

        if (complement in hash) {
            // console.log('hash',hash);

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