const fibonacci = function(a) {
  if(a<0) return "OOPS"
  let n = parseInt(a);
  if (n===1 || n===2) {
    return 1
  } else return fibonacci(n-1) +fibonacci(n-2)
  }

// Do not edit below this line
module.exports = fibonacci;
