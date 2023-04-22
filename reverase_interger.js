// function reserver_interger(x)
// {
// var i = x.length; //or 10
// var reverse=[];
// var number =0;
// // console.log('i',i);
// while(i--)
// {
//     reverse[number]+= x[i]
//     console.log('ads',reverse[number]);

// }
// }
// var reverse = function(x) {
//        var i = x.length;
//       reverse += x[i];
//     }
//     return parseInt(reverse); 
// };

function reverse_integer(x) {
    var reverse = 0;
    while (x !== 0) {
        var digit = x % 10;
        console.log('digit', digit);
        reverse = (reverse * 10) + digit;
        console.log('reverse', reverse);

        x = parseInt(x / 10);
        // console.log('x', x);

    }
    return reverse;
}
function reverse(x) {
    var reserve = 0;
    while (x !== 0) {
        var digit = x % 10;
        reserve = (reserve * 10) + digit

        x = parseInt(x / 10)
    }
}

// function reverse_integer(x) {
//     let reversed = 0;
//     const isNegative = x < 0;
//     // console.log(isNegative);
//     x = Math.abs(x);

//     while (x !== 0) {
//         reversed = reversed * 10 + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     if (reversed > 2 ** 31 - 1) {
//         return 0;
//     }
//     // console.log('reversed', isNegative);
//     // return reversed
//     return isNegative ? -reversed : reversed;
// }

// var reverse = function (x) {
//     if (x < 0) return -1 * reverse(-x);
//     const solution = x.toString().split('').reverse().join('');
//     return (solution > 2 ** 31 - 1) ? 0 : solution;
// };

var test = reverse_integer(123)

// var test = reverse(153423646)

console.log('data', test);




function isPalindrome(num) {
    const reversedNum = parseInt(num.toString().split('').reverse().join(''));
    return num === reversedNum;
}

var data2 = isPalindrome(1111);
console.log('data2', data2);
