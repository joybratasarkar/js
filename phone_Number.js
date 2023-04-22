// var letterCombinations = function(digits) {
//     // console.log('digits',digits);
//     var key=[];
//     // let key = '';

//     var map={
//         2:'abc',
//         3:'def',
//         4:'ghi',
//         5:'jkl',
//         6:'mno',
//         7:'pqrs',
//         8:'tuv',
//         9:'wxyz'
//     }
//    var a= Array.from(digits)
//    a.forEach(element => {
//     // key += map[element] +',';
//     key.push(map[element])
//    });
//    console.log(key);

//    var rows = new Array(key).fill('');

//    console.log(rows);


// };

const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

let result = [];

var letterCombinations = function (digits) {
    if (!digits) return [];

    let current = [];
    generateCombination(current, digits, 0);

    return result;
};
function generateCombination(current, digits, index) {
    if (index === digits.length) {
        result.push(current.join(''));
        return;
    }
    // console.log('map[digits[index]]', map[digits[index]], '------------', index);
    for (const char of map[digits[index]]) {
        current.push(char);
        generateCombination(current, digits, index + 1);
        current.pop();
    }
}








var phone = function (digits) {
    if (!digits) return []
    // let result = [];
    let current = [];
    console.log('digits',current);

    callbackfuntion(current, digits, 0);
    return result

}
function callbackfuntion(current, digits, index) {
    console.log('digits',digits);
    if (index === digits.length)
        return result.push(current.join(''));
    else
        // console.log('map[digits[index]]', map[digits[index]]);
    for (let char of map[digits[index]]) {
        // console.log('char', char);
        current.push(char);
        callbackfuntion(current,digits,index+1)
        current.pop();

    }

}








var digits = "2"

var data = phone(digits)
console.log('result check', data);