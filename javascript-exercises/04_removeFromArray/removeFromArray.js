const removeFromArray = function() {
    for (let i = 0; i < arguments[0].length; i++) {
        for (let a = 0; a < arguments.length; a++) {
            if (arguments[0][i] == arguments[a] && typeof arguments[0][i] == typeof arguments[a]) {
                arguments[0].splice(i , 1)
                i--
            }
        }
    }
    return arguments[0]
};

// Do not edit below this line
module.exports = removeFromArray;
