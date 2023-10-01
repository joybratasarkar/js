var arr = [1, 2, 3, 4, 5, 7, 7, 7, 5];

var clone = structuredClone(arr)

const mySet1 = new Set([...arr]);

const mySetmap = [...new Set(arr.map((data) => data * 2))];

const mySetmapClone = [...new Set(clone.map((data) => data * 2))];

console.log(mySet1);


// console.log([...new Set(arr)]);

var day='tuesday'

var map={
  'sunday':0,
  'monday':1,
  'tuesday':2
}

var check=map[day] ? map[day] : -1
console.log('check',check);


var Object=new Array(5).fill(false)
// console.log('Object',Object);
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

let user = { username:"admin", age:28 }
// Not like this
// newUser.age = 30;

// But like this
let newUser = {...user, age:29 }

function transformCardNumber(number) {
  let parts = []; // array to store the parts

  for (let i = 0; i < 16; i += 4) {
    parts.push(number.substr(i, 4)); // extract a substring of length 4
  }

  return parts.join("-"); // join the parts with a space separator
}


var a=transformCardNumber('1738392947283938') 
console.log('a',a);


const str = 'my   name is joy ';
const words = str.split(/\s+/).filter((word) => word !== '');
const wordCount = words.length;

console.log('Number of words:', wordCount);

