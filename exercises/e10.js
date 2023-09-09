// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {  
  var arrWithAccountNames = [];
  for (var i = 0; i < array.length; i++) {
   var namesWithLetters = [];
   var withALetter = false;
   for (let z in array[i].name) {
       namesWithLetters.push(array[i].name[z].toLowerCase());
   }
   for (let y = 0; y < namesWithLetters.length; y++) {        
       if (namesWithLetters[y] === letter) {
          var withALetter = true;
       }      
   }
   if (withALetter) {
       arrWithAccountNames.push(array[i].name);    
   }
  }
  return arrWithAccountNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
