// Charachter arrays
var charlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sym = ['!', '@', '#', '$', '%', '?', '&', '*'];
// extra var decs
var upLet;
var contNums;
var contSpec;
var lowlet;
var charLen;

var generateBtn = document.querySelector("#generate");

// Event listner for event click to start prompts//
generateBtn.addEventListener("click", writePassword);

// prompts for char length with required peramiters//
function charPrompt() {
   charLen = parseInt(prompt("Enter Password length between 8-128"));
   while (charLen <= 7 || charLen >= 129) {
   alert("Please attempt again, Password length must be between 8-128 characters");
    charLen = prompt("Enter Password length between 8-128");
  }

  // confirms for char//
  lowLet = confirm("Letters contain lowercase");
  upLet = confirm("Letters contain uppercase");
  contNums = confirm("Characters contain numbers");
  contSpec = confirm("Characters contain special characters");

   while (lowLet === false && upLet === false && contNums === false && contSpec === false){
      alert("Please attempt again you must choose at least one Character type");
        lowLet = confirm("Letters contain lowercase");
        upLet = confirm("Letters contain uppercase");
        contNums = confirm("Characters contain numbers");
        contSpec = confirm("Characters contain special characters");
  }
}
//function to pull a random char from the chosen array//
function rdmChar (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
//generate password function//
function generatePassword() {
  var password = []
  charPrompt()
  if (lowLet) password.push(rdmChar(charlow));
  if (upLet) password.push(rdmChar(charup));
  if (contNums) password.push(rdmChar(num));
  if (contSpec) password.push(rdmChar(sym));
 
    while (password.length < charLen) {
      if (lowLet && password.length < charLen) password.push(rdmChar(charlow));
      if (upLet && password.length < charLen) password.push(rdmChar(charup));
      if (contNums && password.length < charLen) password.push(rdmChar(num));
      if (contSpec && password.length < charLen) password.push(rdmChar(sym));
  }
      return password.join("")
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}