

// function stock(prices) {

//     let left = 0;//buy
//     let right = 1;//sell
//     let max_profit = 0
//     while (right < prices.length) {
//         if (prices[left] < prices[right]) {
//             let profit = prices[right] - prices[left];
//             max_profit = Math.max(max_profit, profit)
//         }
//         else
//         {
//             left=right
//         }
//         right++
//     }
//     return max_profit
// }


// sliding window
function stock(prices) {

    let res = 0;
    let curr = 0;
    let next = 1;
    while (next < prices.length) {
        res = Math.max(res, prices[next] - prices[curr]);
        if (prices[curr] > prices[next]) {
            curr = next;
        }
        next++;
    }
    return res;
}


var prices = [7, 1, 5, 3, 6, 4]

var data = stock(prices)

console.log('data', data);
