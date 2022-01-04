(function() {
    'use strict';
  
    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------
  
    //function decides which number is larger.
    //function arguments are num1 and num2.
    //function returns the larger of the two arguements.

      function max(num1, num2) {
          if(num1 > num2) {
            return num1;
          } else {
            return num2;
          }
      }
  
    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------
      
    // Function decides which of three numbers is the largest
    // The arguments are num1 num2 and num3
    // Function returns the largest of the three arguments.

      function maxOfThree(num1, num2, num3) {
          if (num1 > num2 && num1 > num3) {
            return num1;
          } else if(num2 > num1 && num2 > num3){
            return num2;
          } else {
            return num3;
          }
        }
  
    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------
        
        // Function will recieve a string and decide if it is a vowel
        // The argument is str
        // Function returns true or false depending on the string 


        function isVowel(str) {
            const vowel = [`a`, `e`, `i`, `o`, `u`];
              if (vowel.includes(str)) {
                return true;
              } else {
                return false;
              }
          }
        
  
    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------
    
        // Function translates the string based on instructions
        // Argument is string
        // Function returns the translated string in a new string

        function rovarspraket(str) {
          let newText = '';
            const vowel = [`a`, `e`, `i`, `o`, `u`];
              for(let i = 0; i < str.length; i++) {
                if(vowel.includes(str.charAt(i))) {
                  newText += str.slice(i,i + 1);
                } else if (str.charAt(i) == ` `) {
                  newText += str.slice(i,i+1);
                } else {
                  newText += str.slice(i,i + 1);
                  newText += `o`;
                  newText += str.slice(i,i + 1);
                }
              }
            return newText;
        }
  
    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------
  
        // Functions add and muliply all the numbers in given array together
        //  Argument is arr
        // Functions return the result of the calc


        function sum(arr) {
          let result = 0;
            for(let i = 0; i < arr.length; i++) {
              result += arr[i];
            }
          return result;
        }

        function multiply(arr) {
          let result = 1;
            for(let i=0; i < arr.length; i++) {
              result *= arr[i];
            }
          return result;
        }
  
    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------

        // Function completely reverses the given string
        // Argument is str
        // Function returns the reverse of the given string in a new string
  
          function reverse(str) {
            let newStr = ``;
              for(let i = str.length - 1; i >= 0; i--) {
                newStr += str[i];
              }
            return newStr;
          }
  
    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------
  
          // Function finds the longest word in an array
          // Argument is arr
          // Function returns the longest word in the array

          function findLongestWord(arr) {
            let longest = 0;
              for(let i = 0; i < arr.length; i++) {
                if(arr[i].length > longest) {
                  longest = arr[i].length;
                }
              }
            return longest;
          }
  
    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------
  
          // Function decides which words in a given array are longer than the user specified length
          // Arguments are arr and i
          // Function returns a new array containing the words that are longer than i

          function filterLongWords(arr, i) {
            let length = i 
            let newArr = [];
              for(let y = 0; y < arr.length; y++) {
                if(arr[y].length > length) {
                  newArr.push(arr[y])
                }
              }
              return newArr;
          }
  
    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------
  
          // Function counts how many times a character in a string is used and stores the amount in an obj
          // Argument is st
          //  Function returns the object containing the character counts.

          function charFreq(str) {
            let allChar = {};
              for(let i = 0; i < str.length; i++){
                let char = str.charAt(i);
                if(allChar.hasOwnProperty(char)) {
                  allChar[char] += 1;
                } else {
                  allChar[char] = 1; 
                }
              }
              return allChar;
          }
  
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////
  
    console.assert(max(2, 4) === 4, 'function max error');
  
    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');
  
    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');
  
    console.assert(isVowel('a') === true, 'ERROR function isVowel');
  
    console.assert(isVowel('b') == false, 'ERROR function isVowel');
  
    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');
  
    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');
  
    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');
  
    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');
  
    console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');
  
    console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);
  
    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();