// Char arrays
var charlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sym = ['!', '@', '#', '$', '%', '?', '&', '*'];
// i added them here sice when i added the var dow in the confirms with the function loop it nested them there. 
var upLet = charup
var contNums = num
var contSpec = sym 


var generateBtn = document.querySelector("#generate"); {

}

// Event listner for event click to start prompts
generateBtn.addEventListener("click", charPrompt); {

}
 
// prompts for char length with required peramiters
function charPrompt(){
   var charLen = prompt("Enter Password length between 8-128"); { 
   while(charLen <= 7 || charLen >= 129) {
     alert("Please attempt again, Password length must be between 8-128 characters");
     var charLen = prompt("Enter Password length between 8-128");}
}
// confirms for char

var upLet = confirm("Letters contain uppercase, lowercase are automatically included");
var contNums = confirm("Characters contain numbers");
var contSpec = confirm("Characters contain special characters");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generating a random letter using my array. 
// function generateRdm(){
//  Math.random().toString(36).slice(2)
for (var i = 0; i < 1; i++) {
  var generateRdm = chars[Math.floor(Math.random() * chars.length)];
  //  console.log(generateRdm)
}
// if and else ifs for password generation my idea here is to just take the input and then add the char to the loop
//all 3 char options and lowercase
if (lowLet && upLet && contNums && contSpec){
  chars = (charup += charlow += num += sym);
}
// 2 char options and included lowercase
else if(lowLet && contNums && contSpec){
  chars = (charlow += num += sym);
}
else if(lowLet && upLet && contSpec){ 
  chars = (charlow += charup += sym);
}
else if (lowLet && contNums && contSpec){
  chars = (charlow += num += sym);
}
//1 char option and included lowercase
else if(lowLet && upLet){
  chars = (charlow += charup);
}
else if(lowLet && contNums){
  chars = (charlow += num);
}
else if(lowLet && contSpec){
  chars = (charlow += sym);
}

// console.log(chars)