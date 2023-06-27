var myAtoi = function(s) {
    const regex = /^([\s]+)?[-+]?[0-9]+/;
  console.log('s.match(regex)[0]',Math.pow(2, 31) - 1);
    return s.match(regex)? Math.min(Math.max(parseInt(s.match(regex)[0]), -Math.pow(2, 31)),Math.pow(2, 31) - 1): 0;
      
  };

// var s = "   -42"
var s=s = "4193 with words"
var data=myAtoi(s)  
console.log('data',data);