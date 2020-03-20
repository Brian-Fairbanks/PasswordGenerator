# 03 JavaScript: Password Generator
Thia project was made to work on my ability to code in javascript.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Overall Flow
Starting with clicking on the button --  
I prompt the user for a series of inputs:  
* length of password  
    * this input is then error checked to verify that it is actually a number, and that the number falls between 8 and 128 characters  
* if they want to use upercase characters  
* if they want to use lowercase characters  
* if they want to use numeric characters  
* if they want to use special characters  
    * Special characters pulled from [owasp](https://www.owasp.org/index.php/Password_special_characters).
    * if none of these are selected, it will alert the user and ask each one again

Based on each accepted character set, I then push each character from ascii conversion into a valid character list : ValidChars
using this list, I then create a password by choosing a random charcter for for each of the requested length.

## Functions
* function writePassword()
    * takes no inputs
    * prompts user for all required vairables
    * calls generatepassword
    * prints password to html

* function generatePassword(len, lc, uc, num, spec){
    * takes inputs for : Int passwordLength, Bool userLowercase, Bool useUppercase, Bool useNumeric, Bool useSpecial
    * generates a password of length passwordLength, and returns password

* generateBtn.addEventListener("click", writePassword);
    * event listener on buttom - Calls writePassword
