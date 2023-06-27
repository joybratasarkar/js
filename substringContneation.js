// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
// function findSubstring(s, words) {
//     let hashSet = new Set()
//     let sumOfWindow = 0; //to keep track of sum of the window.
//     var windowSize = 0;
//     let stringMatch = ''
//     let lengthtomatch = 0;
//     var removeDuplicate = new Set()
//     var rows = new Array(s).fill('');
//     const wordLength = words[0].length
//     console.log('wordLength', wordLength);
//     const wordArrayLength = wordLength * words.length;
//     console.log('wordArrayLength', wordArrayLength);



//     let maxSum = 0;  //to keep track of maximum sum.
//     for (var [index, key] of Object.entries(words)) {
//         var data = { index, key }
//         hashSet.add(data)
//     }
//     for (var i = 0; i < s.length - wordArrayLength; i++) {
//         let current = s.substring(i, i + wordArrayLength);

//         const wordMap = {};
//         let index = 0;
//         let j = 0;

//         while (index < words.length) {
//             const part = current.substring(j, j + wordLength);
//             console.log('part', j );
//             wordMap[part] = (wordMap[part] + 1) || 1;
//             console.log('wordMap[part]', wordMap);
//             j += wordLength;
//             index++;
//         }

//     }
//     return rows.join('');


// };

// var findSubstring = function (s, words) {
//     // Resultant list
//     const indices = [];
//     // Base conditions
//     if (s === null || s.length === 0 || words === null || words.length == 0) {
//         return indices;
//     }
//     // Store the words and their counts in a hash map
//     const wordCount = words.reduce((a, b) => {
//         a[b] = (a[b] + 1) || 1;
//         return a;
//     }, {});
//     console.log('wordCount',wordCount);
//     // Length of each word in the words array`
//     const wordLength = words[0].length;
//     console.log('wordLength',wordLength);
//     // Length of all the words combined in the array
//     const wordArrayLength = wordLength * words.length;
//     console.log('wordArrayLength',wordArrayLength);
//     // Loop for the entire string
//     for (let i = 0; i <= s.length - wordArrayLength; i++) {
//         // Get the substring of length equal to wordArrayLength
//         let current = s.substring(i, i + wordArrayLength);
//         // console.log('current',current);
//         // Map to store each word of the substring
//         const wordMap = {};
//         // Index to loop through the words array
//         let index = 0;
//         // Index to get each word in the current
//         let j = 0;
//         // Loop through each word of the words array
//         while (index < words.length) {
//             // Divide the current string into strings of length of
//             // each word in the array
//             const part = current.substring(j, j + wordLength);
//             console.log('part',part);
//             // Put this string into the wordMap
//             wordMap[part] = (wordMap[part] + 1) || 1;
//             console.log('wordMap[part]',wordMap);
//             // Update j and index
//             j += wordLength;
//             index++;
//         }
//         // At this point compare the maps
//         let a = JSON.stringify(Object.entries(wordCount).sort());
//         let b = JSON.stringify(Object.entries(wordMap).sort());
//         // console.log(b);
//         if (a === b) {
//             indices.push(i);
//         }
//     }
//     return indices;  
// };



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let totalCharCount = 0
    let map = new Map()
    
    let wordLength = words[0].length
    let wordCount = words.length
    
    let slideWindow = wordLength * wordCount
    for (let word of words) {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1)
    }
    
    let leftIndex = 0
    let rightIndex = slideWindow - 1
    let result = []
    
    const helper = (tempStr) => {
        let visited = new Map()
        for (let i = 0; i < tempStr.length; i+= wordLength) {
            let word = tempStr.substr(i, wordLength)
            visited.has(word) ? visited.set(word, visited.get(word) + 1) : visited.set(word, 1)
        }
        for (let [key, val] of visited) {
            if (map.get(key) != val) return false
        }
        
        return true
    }
    
    while (rightIndex < s.length) {
        
        if (rightIndex - leftIndex + 1 == slideWindow) {
            let tempStr = s.substring(leftIndex, rightIndex + 1)
            if (helper(tempStr)) result.push(leftIndex)
            leftIndex++
        }
        rightIndex++
    }
    return result
};
var s = "barfoothefoobarman", words = ["foo", "bar"]

var data = findSubstring(s, words)
console.log('findSubstring', data);












