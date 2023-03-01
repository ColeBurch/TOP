const convertToCelsius = function(fTemp) {
    let cTemp = (fTemp - 32) * (5 / 9);
    let roundCTemp = Math.round((cTemp + Number.EPSILON) * 10) / 10;
    return roundCTemp
};

const convertToFahrenheit = function(cTemp) {
    let fTemp = (cTemp * (9 / 5)) + 32;
    let roundFTemp = Math.round((fTemp + Number.EPSILON) * 10) / 10;
    return roundFTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
