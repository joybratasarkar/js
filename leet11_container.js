// var maxArea = function(height) {

//     const remove_Duplicated_data = [...new Set(height)];

//     // console.log('remove_Duplicated_data',remove_Duplicated_data);

//     var uniqueHeightArray = Array.from(remove_Duplicated_data);
// // console.log('uniqueHeightArray',uniqueHeightArray);
//     sorted_Height= uniqueHeightArray.sort((a,b)=>a-b)
//     // console.log('sorted_Height',sorted_Height);


//     var last=sorted_Height.at(-1);
//     var secondLast = sorted_Height.at(sorted_Height.length - 2);
//     console.log('last',last);
//     console.log('secondLast',secondLast);
//     return secondLast*secondLast

// };
// function maxArea(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let maxArea = 0;

//     while (left < right) {
//         console.log('height[left]', height[left], '\n');
//         console.log('height[right]', height[right], '\n');
//         console.log('right', right, '\n');
//         console.log('left', left, '\n');
//         const area = Math.min(height[left], height[right]) * (right - left);
//         // console.log('area', area, '\n');
//         maxArea = Math.max(maxArea, area);
//         console.log('maxArea', maxArea, '\n');

//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxArea;
// }


function maxArea(height) {
    console.log('height', height);
    left = 0;
    let right = height.length - 1;

    maxArea;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        // console.log('area', area);
        maxArea = Math.max(maxArea, area);
        // console.log('maxArea', maxArea, '\n');

        if (height[left] < height[right]) {
            left++
        }
        else {
            right--
        }
    }
    return maxArea
}
// height = [4, 3, 2, 1, 4]
// height= [1,1]

height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// var data = maxArea(height);
// console.log('data', data);


// function expression_Mactching(string1, string2) {
//     let words = string1.split('');
//     let words2 = string2.split('');
//     let loop = 0
//     let dp = [];
//     let symbol=string2
//     let result;
//     if (words2[0].includes('.', '*')) {
//         for (let index_x = 0; index_x < words.length; index_x++) {

//             for (let index_j = 0; index_j < words2.length; index_j++) {
//                 // || '*'
//                 console.log('symbol',symbol);
//                 if (words2[index_j].includes('.')) {

//                     if (words[index_x] == words2[index_j + 1]) {
//                         console.log('asd234');


//                     }

//                 }

//             }
//         }
//         return true

//     }
//     else if (words2.length >= 1) {
//         // console.log('words',words);
//         // 
//         // console.log('words2',words2);
//         while (words[0].includes(words2[0]) && loop < words2.length) {

//             loop += 1;
//         }

//         // result  = words.match(words2);
//         // console.log(result);

//     }
//     else {
//         return false
//     }


//     // return result


// }



var isMatch = function (s, p) {
    const rows = s.length;
    const columns = p.length;
    /// Base conditions
    if (rows == 0 && columns == 0) {
        return true;
    }
    if (columns == 0) {
        return false;
    }
    // DP array
    const dp = Array.from({ length: s.length + 1 }, () => [false]);
    console.log('dp',dp);
    // Empty string and empty pattern are a match
    dp[0][0] = true;
    // Deals with patterns with *
    for (let i = 1; i < columns + 1; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
        else {
            dp[0][i] = false;
        };
    }
    // For remaining characters
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < columns + 1; j++) {
            if (p[j - 1] === '*') {
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') 
                {
                dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } 
                else {
                dp[i][j] = dp[i][j - 2];
                }
            } else if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[rows][columns];
};
var s = "abbbb"
var p = ".*"
// var p = "a"



var data = isMatch(s, p);
console.log('data', data);