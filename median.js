let nums1 = [1, 5,2];
let nums2 = [7,6,8,20];

var findMedianSortedArrays = function(nums1, nums2) {

    nums1.push(...nums2)
    num1= nums1.sort((a,b)=>a-b)
    console.log(nums1)

    let length=nums1.length;
    if(length % 2 === 0)
    {
        return [nums1[length / 2 - 1] + nums1[length / 2] / 2]
    }
    else{
        return nums1[Math.floor(length / 2)];

    }
};

let median =findMedianSortedArrays(nums1,nums2);
console.log('Median:', median);







// var findMedianSortedArrays = function(nums1, nums2) {
//     // let nums = nums1.concat(nums2).sort((a, b) => a - b);
//     nums1.push(...nums2);
//     num1  =  nums1.sort((a, b) => a - b);

//     let len = nums1.length;
//     if (len % 2 === 0) {

//         return (nums1[len / 2 - 1] + nums1[len / 2]) / 2;
//     } else {
//         return nums1[Math.floor(len / 2)];
//     }
// };

















