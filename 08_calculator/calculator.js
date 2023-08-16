const add = function() {
	return arguments[0]+arguments[1]
};

const subtract = function() {
	return arguments[0]-arguments[1]
};

const sum = function(arr) {
	const sum = arr.reduce((sum,a) => sum +a, 0);
  return sum
};

const multiply = function(arr) {
	const m = arr.reduce((p,a) => p*a, 1);
  return m
};

const power = function() {
	return arguments[0]**arguments[1]
};

const factorial = function() {
	let i = arguments[0];
  let answer = 1;
  while (i>0) {
    answer *= i--;
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
