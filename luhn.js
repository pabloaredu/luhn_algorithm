// LUHN ALGORITHM
// Create a function to test if a SIN Number is valid
// (https://en.wikipedia.org/wiki/Social_Insurance_Number)

// Receive a string and return a bool
const verifySinNumber = (sinNumber) => {
  if ( sinNumber.length !== 9 ) {
    return false;
  }

  if (sumOfDigitsStr(sinNumber) == 0) {
    return false;
  }

  let sumOfTotalDigits = 0;
  for (let i = 0; i < sinNumber.length; i++) {
    if (i % 2 == 0) {
      sumOfTotalDigits += parseInt(sinNumber.charAt(i));
    }
    if (i % 2 > 0) {
      let evenDigitTimesTwo = parseInt(sinNumber.charAt(i)) * 2;
      let numLength = getLength(evenDigitTimesTwo);
      if (numLength > 1) {
        const digits = splitIntoDigits(evenDigitTimesTwo);
        sumOfTotalDigits += sumOfDigits(digits);
      } else {
        sumOfTotalDigits += evenDigitTimesTwo;
      };
    };
  }
  if (sumOfTotalDigits % 10 === 0) {
    return true
  } else {
    return false
  }
}

// HELPER FUNCTIONS
const sumOfDigitsStr = str => {
  let sumOfDigits = 0;
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str.charAt(i))
    sumOfDigits += digit
  }
  return sumOfDigits;
}

const sumOfDigits = arr => {
  let sumOfDigits = 0;
  for (const elem of arr) {
    sumOfDigits += Number(elem);
  }
  return sumOfDigits;
}

const splitIntoDigits = num => {
  let digits = (""+num).split("");
  return digits
}

const getLength = num => {
  return num.toString().length;
}

// TEST EXAMPLES
const validSinNumber = "046454286";
console.log("true = ",verifySinNumber(validSinNumber)); //Expected true

const unvalidSinNumber = "046454287";
console.log("false = ", verifySinNumber(unvalidSinNumber)); //Expected false

const letterSinNumber = "0A6454286";
console.log("false = ", verifySinNumber(letterSinNumber)); //Expected false

const zeroSinNumber = "000000000";
console.log("false = ", verifySinNumber(letterSinNumber)); //Expected false
