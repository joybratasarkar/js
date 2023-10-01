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
        // console.log('i',i);
        let l = i;
        let r = i;

        var palindromLength = s.length;

        while (l >= 0 && r <= palindromLength && s[l] === s[r]) {
            // console.log('inside');

            let currentSting = s.substring(l, r + 1);
            console.log('l', l, '----', 'r', r + 1, '----', currentSting);

            if (currentSting.length > longest.length) {
                longest = currentSting
            }
            l -= 1
            r += 1
            // console.log('---l',l,'----','r',r+1);

        }
        l = i;
        r = i + 1;
        while (l >= 0 && r <= palindromLength && s[l] === s[r]) {
            let currentSting = s.substring(l, r + 1);
            if (currentSting.length > longest.length) {
                longest = currentSting
            }
            l -= 1
            r += 1
        }
    }
    return longest;
};
var test = longestPalindrome('abaaba');
console.log(test);









let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        return resolve('success');

    }
    else {
        return reject('Fail');
    }
})

p.then((message) => {
    console.log('check ' + message);
}).catch((err) => {
    console.log('error ' + err);
})

const userLeft = false;
const userWatchingCatMemes = false



function watching() {

    return new Promise((resolve, reject) => {
        if (userLeft) {

            reject('userLeft :-(')
        }
        else if (userWatchingCatMemes) {
            reject('userWatchingCatMemes  :-(')
        }
        else {
            resolve(':-)')
        }
    })
}

// watching().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
watching()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });








const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded')
})



const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded')
})


//   Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
//   ]).then((meesage)=>{
//     console.log('resolve ',meesage);
//   }).catch((err)=>{
//     console.log(err);
//   })


Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((meesage) => {
    console.log('resolve ', meesage);
}).catch((err) => {
    console.log(err);
})



// const recordVideoOne1 = of('Video 1 recorded');
// const recordVideoTwo2 = of('Video 2 recorded');
// const recordVideoThree3 = of('Video 3 recorded');


// forkJoin([recordVideoOne1, recordVideoTwo2, recordVideoThree3]).subscribe(
//     (messages) => {
//         console.log('resolve', messages);
//     },
//     (err) => {
//         console.log(err);
//     }
// );
// race([recordVideoOne1, recordVideoTwo2, recordVideoThree3])
//     .pipe(take(1))
//     .subscribe(
//         (message) => {
//             console.log('resolve', message);
//         },
//         (err) => {
//             console.log(err);
//         }
//     );













    function makeRequest(location){
        return new Promise((resolve,reject)=>{
            console.log(`making Request to${resolve}`);
            if(location==='google')
            {
                resolve('Google say Hi');
            }
            else{
                reject('We can only talk to Google')
            }
        })
    }
    function ProccessRequest(response){
        return new Promise((resolve,reject)=>{
            console.log('Proceesing response');
            resolve(`Extra information +${response}`)
        })
    }
    async function doWork()
    {
        try{
            const response=await makeRequest('google');
            console.log(response);
            const processResponse=await ProccessRequest(response)
            console.log(processResponse);
            
        }catch(err)
        {
            console.log(err);
        }

    }

    doWork()