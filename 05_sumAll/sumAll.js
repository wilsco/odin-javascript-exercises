const sumAll = function(a, b) {
 if (!(Number.isInteger(a) && Number.isInteger(b))) return "ERROR"
 if (a < 0 || b < 0) return "ERROR"
  const bigNumber = Math.max(a,b);
  const smallNumber = Math.min(a,b);
 let sum = 0;
 for (let i=smallNumber; i<= bigNumber; i++) {
    sum += i;
 }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
