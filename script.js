// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate Password Function
function generatePassword(len, lc, uc, num, spec){
  pass = "";
  // create array of valid characters
  //String.fromCharCode();
  validChars = [];

  //add lowercase?
  if(lc){
    for(var i =97; i<122; i++){
      validChars.push( String.fromCharCode(i) );
    }
  }
  //add uppercase?
  if(uc){
    for(var i =65; i<91; i++){
      validChars.push( String.fromCharCode(i) );
    }
  }
  //add numbers?
  if(num){
    for(var i =32; i<48; i++){
      validChars.push(i);
    }
  }
  //add lowercase?
  if(spec){
    var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    for(var i =0; i<specials.length; i++){
      validChars.push( specials[i]);
    }
  }

  //Generate passwrod at length provided
  for(var i=0; i<len; i++){
    charNum=Math.floor(Math.random()*validChars.length)
    pass+=validChars[charNum];
  }

  // return password
  return pass;
}

// Write password to the #password input
function writePassword() {
  //Function Variables
  var passLength;
  var includeLower=false;
  var includeUpper=false;
  var includeNum=false;
  var includeSpecial=false;

  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria

  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  do{
    passLength = prompt("How long to make the password? 8-128")
  }
  while(isNaN(passLength) || passLength < 8 || passLength > 128)

  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  while(!includeLower && !includeUpper && !includeNum && !includeSpecial){
    includeLower = confirm("Shall I use lowercase letters?");
    includeUpper = confirm("Shall I use uppercase letters?");
    includeNum = confirm("Shall I use numbers?");
    includeSpecial = confirm("Shall I use special characters?");
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    if (    !includeLower && !includeUpper && !includeNum && !includeSpecial){
      alert("We cannot generate a password without any characters.  Let me ask again")
    }
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  var password = generatePassword(passLength, includeLower, includeUpper, includeNum, includeSpecial);

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
