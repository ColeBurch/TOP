const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    }
    let longstr = ""
    for (let i = 0; i < num; i++) {
        longstr += str
    }
    return longstr
};

// Do not edit below this line
module.exports = repeatString;
