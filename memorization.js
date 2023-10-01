const prevValue = []

function square(n) {
    if (prevValue[n] != null) {
        return prevValue[n]
    }


    let result = 0;
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < i; j++) {
            result += 1

        }

    }
    prevValue[n] = result
    console.log('prevValue[n]', prevValue[n]);
    return result

}
// const start = performance.now();

// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));
// console.log(square(5000));



// console.log(square(5000));
// console.log(square(6000));
// console.log(square(7000));
// console.log(square(8000));
// console.log(square(9000));
// console.log(square(1000));
// console.log(square(10000));
// console.log(square(11000));


// const end = performance.now();

// console.log(`Execution time: ${end - start} milliseconds`);

// console.log(square(5000));
// console.log(square(6000));
// console.log(square(7000));
// console.log(square(8000));
// console.log(square(9000));
// console.log(square(1000));
// console.log(square(10000));
// console.log(square(11000));




function norFib(n) {
    if (n <= 2) {
        return 1
    }
    else {
        return fib(n - 1) + fib(n-1)
    }
}

// Recursion with memoization
function fib(n, prevValue = []) {
    if (prevValue[n] != null) {
        return prevValue[n]
    }
    else if (n <= 2) {
        result = 1
    }
    else {
        result = fib(n - 1, prevValue) + fib(n - 1, prevValue)
    }
    prevValue[n] = result
    return result

}

// bottom-up dynamic programming with memoization
function bottomUpFib(n) {
    if (n <= 2) {
        return 1;
    }
    const memo = new Array(n);
    memo[0] = 1;
    memo[1] = 1;
    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n - 1];
}

const start = performance.now();
// console.log('norFib',norFib(5000));
// console.log('fibonacci',fib(5));
console.log('fibonacci',bottomUpFib(10));



const end = performance.now();

console.log(`Execution time: ${end - start} milliseconds`);