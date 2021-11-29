// Write coide to return the largest number in the given array

var array = [10, 20, 30, 40, 50, 100];

// we need to compare all the numbers against each other
// The first number of the array is out starting point 
// We need a variable to store the current max number
// Loop through the array
// Compare current number with the current max number
// If the current number is greater than the current max number,
// the current number becomes the current max number
// when the loop is done we return the current max number

function getMax(numberArray) {
    var currentMaxNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > currentMaxNumber) {
        currentMaxNumber = numberArray[i];
       }
    }
    return currentMaxNumber;
};

console.log(getMax(array));


// Write coide to return the Lowest number in the given array

var array = [10, 20, 30, 40, 50, 100];

function getMax(numberArray) {
    var currentMinNumber = numberArray[0];
    for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < currentMinNumber) {
        currentMinNumber = numberArray[i];
       }
    }
    return currentMinNumber;
};

console.log(getMax(array));


