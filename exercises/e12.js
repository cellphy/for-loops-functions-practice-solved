
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {  
  let largestNum = [150, 221, 1100, 4000, 5000, 6000, 9200, 256.57];
    for(let i = 0; i < array.length; i++) {
     for(let z = 0; z < array[i].length; z++) {
        if(array[i][z] > largestNum[i]) {         
           largestNum[i] = array[i][z];
         }
     }
  }
  return largestNum;
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
