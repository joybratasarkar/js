var arr = [1, 2, 3, 4, 5, 7, 7, 7, 5];

var clone = structuredClone(arr)

const mySet1 = new Set([...arr]);

const mySetmap = [...new Set(arr.map((data) => data * 2))];

const mySetmapClone = [...new Set(clone.map((data) => data * 2))];

// console.log(mySet1);


// console.log([...new Set(arr)]);



const findLastElement = arr.at(0)


const mappedArray = [...mySet1].map((element) => element * 2);


// console.log('findLastElement',findLastElement)
// console.log(mappedArray)
// console.log(mySet1)
function reverse_integer(x) {
  var reverse = 0;
  while (x != 0) {
    var digit = x % 10;
    reverse = (reverse * 10) + digit;
    x = parseInt(x / 10);
  }
  return reverse;
}