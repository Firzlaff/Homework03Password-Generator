// Char arrays
var charlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sym = ['!', '@', '#', '$', '%', '?', '&', '*'];


var generateBtn = document.querySelector("#generate"); {
 }
// prompts for char length
var charLen = prompt("Enter Password length between 8-128"); 
// confirms for char
var lowLet = confirm("Letters contain lowercase");
var upLet = confirm("Letters contain uppercase");
var contNums = confirm("Characters contain numbers");
var contSpec = confirm("Characters contain special characters");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

}

//Generating a random letter using my array. 
// function generateRdm(){
//  Math.random().toString(36).slice(2)
 
for (var i = 0; i < 1; i++) {
  
  var generateRdm = char[Math.floor(Math.random() * char.length)];
  //  console.log(generateRdm)
}

// if and else ifs for password generation

//all four char options 
if (lowLet && upLet && contNums && contSpec){
  chars = (charup, charlow, num, sym);
}
// 3 char options
else if(lowLet && contNums && contSpec){
  chars = concat(charlow, contNums, contSpec);
}
else if(lowLet && upLet && contSpec){ 
  chars = concat(charlow, charup, sym);
}
else if (lowLet && contNums && contSpec){
  chars = concat(charlow, num, sym);
}
//2 char options
else if(lowLet && upLet){
  chars = concat(charlow, charup);
}
else if(lowLet && contNums){
  char = concat(charlow, num);
}
else if(lowLet && contSpec){
  char = concat(charlow, sym);
}
