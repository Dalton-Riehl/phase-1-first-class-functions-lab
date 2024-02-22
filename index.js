const returnFirstTwoDrivers = function (oldArray) {
    const newArray = [oldArray[0], oldArray[1]];
    return newArray;
}

const returnLastTwoDrivers = function (oldArray) {
    const newArray = [oldArray[oldArray.length - 2], oldArray[oldArray.length - 1]];
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (melancholy) {
        return melancholy * multiplier;
    }
}

function fareDoubler(num1) {
    return num1 * 2;
}

function fareTripler(num2) {
    return num2 * 3;
}

function selectDifferentDrivers(turkey, giblets) {
    const oldArray = turkey;
    return giblets(oldArray);
}