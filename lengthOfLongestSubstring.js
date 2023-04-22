// /**
//  * @param {string} s
//  * @return {number}
//  */

// // var lengthOfLongestSubstring = function (s) {
// //     let longestStringLength = 0,
// //         startOfWindow = 0,
// //         currentPosition = 0;

// //     let characterSet = new Set();

// //     while (currentPosition < s.length) {
// //         if (characterSet.has(s[currentPosition])) {
// //             characterSet.delete(s[startOfWindow++]);
// //         } else {
// //             characterSet.add(s[currentPosition++]);
// //             longestStringLength = Math.max(
// //                 longestStringLength,
// //                 characterSet.size
// //             );
// //         }
// //     }

// //     return longestStringLength;
// // };

// // var s = "abcabcbb"


// var lengthOfLongestSubstring = function (s){
//     console.log(s);
//     const set = new Set();
//     let maxlenght=0;
//     let left=0;
//     for(let i=0;i < s.length;i++)
//     {
//         while(set.has(s.charAt(i)))
//         {
//             set.delete(s.charAt(left))
//             left++
//         }
//         console.log('s.charAt(i)',s.charAt(i));
//         set.add(s.charAt(i));
//         maxlenght=Math.max(maxlenght,set.size);
//     }
//     return maxlenght


// }
// var s='pwwkew'
// // var s='abcdabcabcd'
// var data = lengthOfLongestSubstring(s)
// console.log('lengthOfLongestSubstring', data);










var mergeTwoLists = function (list1, list2) {
    console.log('list2',list2,'list1',list1);
    if ( list1.length == [] &&  list2.length == []) {
      return
    }
    else {
    //   list1.concat(list2)
          let nums = list1.concat(list2)

      console.log(nums)
  
    }
  };


  var list1 = [1,2,4], list2 = [1,3,4]
// var list1 = [], list2 = [0]

  var data=mergeTwoLists(list1,list2)
  console.log('data',data);