const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR'
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    } else {

        if (num1 > num2) {
            [num1, num2] = [num2, num1];
        }
        
        function sum(startNum, endNum) {
            if (startNum === endNum) {
                return startNum
            } else {
                return sum(startNum, endNum - 1) + endNum
            }
        }
    }
    return sum(num1, num2)

    

};

// Do not edit below this line
module.exports = sumAll;
