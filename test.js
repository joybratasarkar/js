// var longestPalindrome = function(s) {
//     let longest = '';
// // console.log(s);
//     for (let i = 0; i < s.length; i++) {
//         let left = i;
//         let right = i;

//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             console.log('inside_odd')
//             let current = s.substring(left, right + 1);
//             // console.log(current ,'==============',left, right+1,'-----',current.length, '--------------- ', longest.length)
//             // console.log('==============',left, '========', right+1,'========', current.length,'===',longest.length,'\n')

//             if (current.length > longest.length) {
//                 longest = current;
//             }
//             left--;
//             right++;


//             // console.log('left',left,'\n');
//             // console.log('right',right,'\n');

//         }

//         // Check for even-length palindromes
//         left = i;
//         right = i + 1;
//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             console.log('inside_even')
//             // a2aaae
//             let current = s.substring(left, right + 1);
//             // console.log(current ,'==============',left, right+1,'-----',current.length, '--------------- ', longest.length)
//             // console.log('==============',left, '========', right+1)

//             if (current.length > longest.length) {
//                 longest = current;
//             }
//             left--;
//             right++;
//         }
//     }

//     return longest;
// };



var longestPalindrome = function (s) {
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        var palindromLength = s.length;

        while (l >= 0 && r <= palindromLength && s[l] === s[r]) {
            let currentSting = s.substring(l, r + 1);
            if (currentSting.length > longest.length) {
                longest=currentSting
            }
            console.log(l,'===','r');

            l -= 1
            r += 1
        }
        l = i;
        r = i + 1;
        while (l >= 0 && r <= palindromLength && s[l] === s[r]) {
            let currentSting = s.substring(l, r + 1);
            if (currentSting.length > longest.length) {
                console.log('asdasd')
                longest=currentSting
            }
            console.log(l,'===','r');
            l -= 1
            r += 1
        }
    }
    return longest;
};
var test = longestPalindrome('abaaba');
console.log(test);