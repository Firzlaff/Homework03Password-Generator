// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = prompt("please choose password length between 8-128");
var lowerCase = confrim("Characters contain lowercase");
var upperCase = confrim("Characters contain uppercase");
var containsNumbers = confrim("Characters contain numbers");
var containsCharacters = confrim("Characters contain soecial characters");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
