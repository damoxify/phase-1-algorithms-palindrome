function isPalindrome(word) {
  // Write your algorithm here
    // Convert the word to lowercase to handle case-insensitivity
    const lowerWord = word.toLowerCase();
  
    // Compare the original word with its reverse
    const reversedWord = lowerWord.split("").reverse().join("");
    return lowerWord === reversedWord;
} 

/* 
  Add your pseudocode here
*/
/* 
  1. Convert the input word to lowercase to handle case-insensitivity.
  2. Reverse the lowercase word.
  3. Compare the original lowercase word with the reversed lowercase word.
  4. If they are the same, return true (indicating a palindrome), otherwise return false.


/*
  Add written explanation of your solution here
  
  The `isPalindrome` function takes a word as input and converts it to lowercase using the `toLowerCase` method. This ensures that the function handles case-insensitive palindromes correctly.
  It then reverses the lowercase word by splitting it into an array of characters, reversing the array, and then joining the characters back into a string.
  Finally, it compares the original lowercase word with the reversed lowercase word. If they are the same, the function returns true, indicating that the word is a palindrome. If they are not the same, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
