const reverseString = function(str) {
    let new_str = "";
    let i = str.length -1;
    for (i; i >= 0; i--) {
        new_str += str.charAt(i);
    }
    return new_str
};

// Do not edit below this line
module.exports = reverseString;
