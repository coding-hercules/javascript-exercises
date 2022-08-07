const sumAll = function(num1, num2) {
    /*if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') {
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
    return sum(num1, num2)*/

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum+=i
    }
    return sum

};

// Do not edit below this line
module.exports = sumAll;
