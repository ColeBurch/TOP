const sumAll = function(num1, num2) {
    let largeNum = null
    if (typeof num1 == 'number' && typeof num2 == 'number' && num1 > 0 && num2 > 0) {
        if (num1 > num2) {
            largeNum = num1
        } else {
            largeNum = num2
        }
        let sum = (num1 + num2) * (largeNum / 2)
        return sum
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
