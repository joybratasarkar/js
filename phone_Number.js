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

// var letterCombinations = digits => {
//     if (!digits) return [];

//     let current = [];
//     generateCombination(current, digits, 0);

//     return result;
// };
// function generateCombination(current, digits, index) {
//     if (index === digits.length) {
//         result.push(current.join(''));
//         return;
//     }
//     // console.log('map[digits[index]]', map[digits[index]], '------------', index);
//     for (const char of map[digits[index]]) {
//         current.push(char);
//         generateCombination(current, digits, index + 1);
//         current.pop();
//     }
// }








var phone = function (digits) {
    if (!digits) return []
    // let result = [];
    let current = [];
    console.log('digits', current, digits);
    callbackfuntion(current, digits, 0);
    console.log('current', result, digits);

    return result

}
function callbackfuntion(current, digits, index) {
    console.log('digits', current, index);
    if (index === digits.length)
    {
        console.log('result.push(current',result.push(current.join('')));

    return result.push(current.join(''));
    }
    else
    console.log('index', index);
    // console.log('map[digits[index]]', map[digits[index]]);
    for (let char of map[digits[index]]) {
        current.push(char);
        console.log('char', current);

        callbackfuntion(current, digits, index + 1)
        current.pop();
        console.log('pop', current);


    }

}








var digits = "23"

// var data1 = phone(digits)

// console.log('result check', data1);

const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

var letterCombinations = function(D) {
    let len = D.length, ans = []
    if (!len) return []
    const bfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            console.log('letters',str);

            let letters = L[D[pos]]
            console.log('letters',letters);
            for (let i = 0; i < letters.length; i++)

            bfs(pos+1,str+letters[i])
        }
    }
    bfs(0,"")
    return ans
};
var data1=letterCombinations(digits)
console.log('data1',data1);