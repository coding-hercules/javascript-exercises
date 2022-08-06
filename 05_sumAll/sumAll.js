const sumAll = function(num1, num2) {
    
    function sum(startNum, endNum) {
        if (startNum === endNum) {
            return startNum
        } else {
            return sum(startNum, endNum - 1) + endNum
        }
    }
    
    return sum(num1, num2)
};

// Do not edit below this line
module.exports = sumAll;
