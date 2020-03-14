// Assignment Code
var generateBtn = document.querySelector("#generate");


var characterLength = prompt("please choose password length between 8-128");

var lowerCase = confrim("Letters contain lowercase");

var upperCase = confrim("Letters contain uppercase");

var containsNumbers = confrim("Characters contain numbers");

var containsCharacters = confrim("Characters contain special characters");




var charlow = ("abcdefghijklmnopqrstuvwxyz");
var charup = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var num = ("0123456789");
var sym = ("!@#$%?&*");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


