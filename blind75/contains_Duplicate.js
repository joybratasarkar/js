function containsDuplicate(params) {
    const s = new Set(nums); 
    return s.size !== nums.length
}

const nums = [1,1,1,3,3,4,3,2,4,2]
const data=containsDuplicate(nums);
console.log(data);