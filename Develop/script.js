// Assignment Code
var generateBtn = document.querySelector("#generate"); {
 //   document.getElementById("#generate").addEventListerner("click", "charLen")

      //  var charLen = prompt("Enter Password length between 8-128"); 
     //     charLen = length of the password that needs to be created
     
}

//  var lowLet = confirm("Letters contain lowercase");
// lowLet = should the password contain lowercase letters
//console.log(charLen)


 // var upLet = confirm("Letters contain uppercase");
// upLet = should the password contain uppercase letters
//console.log(upLet)

//  var contNums = confirm("Characters contain numbers");
  // contNums = should the password contain numbers
//  console.log(contNums)

 // var contSpec = confirm("Characters contain special characters");
  // contSpec = should the pass word contain special characters 
//  console.log(contSpec)


//this was just for another idea i was thinking about and if i will need to incorp 
//into a for loop with randomization flor.math random.math

var charlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sym = ['!', '@', '#', '$', '%', '?', '&', '*'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {


//}
//  to string
// function generateRdm(){
//  Math.random().toString(36).slice(2)
//} 
//  generateRdm(charlow)

//  var num = Math.floor(Math.random() * 10) + 1;

// Randomly chooses a letter from the charlow string.
for (var i = 0; i < 1; i++) {
  
  var generateRdm = charlow[Math.floor(Math.random() * charlow.length)];
    console.log(generateRdm)
}} 
