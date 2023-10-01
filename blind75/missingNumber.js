function missingNumber(nums) {
    const n = nums.length;

    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;

}

function missing_MultiNumbers(nums) {
    const n = nums.length;
    const max = Math.max(...nums);
    const expectedSum = (max * (max + 1)) / 2;
    const missingNumbersArray = [];
    for (let i = 1; i <= expectedSum; i++) {
        if (!nums.includes(i) && i <= max) {
            missingNumbersArray.push(i);
        }
    }
    return missingNumbersArray;
}

// function missingMultiNumbers(nums) {
//     const n = nums.length;
//     const numSet = new Set(nums);
//     const missingNumbersArray = [];

//     for (let i = 0; i <= n; i++) {
//         if (!numSet.has(i)) {
//             missingNumbersArray.push(i);
//         }
//     }

//     return missingNumbersArray;
// }


// var nums = [9,6,4,2,3,5,7,0,1,12]
var nums= [3,0,1]
var data = missing_MultiNumbers(nums);
// var data1 = missingMultiNumbers(nums);

console.log('missingNumber', data);
console.log('data1',data1);























//using Binary tree

// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// function insert(root, val) {
//     if (!root) {
//         return new TreeNode(val);
//     }

//     if (val < root.val) {
//         root.left = insert(root.left, val);
//     } else {
//         root.right = insert(root.right, val);
//     }

//     return root;
// }

// function findMissingNumber(nums) {
//     let root = null;

//     // Build the BST from the given array
//     for (const num of nums) {
//         root = insert(root, num);
//     }

//     let prev = null;
//     let missingNumber = null;

//     // In-order traversal to find the missing number
//     function inOrderTraversal(node) {
//         if (!node) return;

//         inOrderTraversal(node.left);

//         if (prev !== null && node.val !== prev + 1) {
//             missingNumber = prev + 1;
//         }
//         prev = node.val;

//         inOrderTraversal(node.right);
//     }

//     inOrderTraversal(root);

//     return missingNumber;
// }

// // Example usage:
// const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1, 12,15];
// const missingNumber = findMissingNumber(nums);
// console.log('Missing Number:', missingNumber);
