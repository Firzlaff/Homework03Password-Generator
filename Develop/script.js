// Char arrays
var charlow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var sym = ['!', '@', '#', '$', '%', '?', '&', '*'];

//   document.getElementById("#generate").addEventListerner("click", "charLen")
var generateBtn = document.querySelector("#generate"); {
 }
//     charLen = length of the password that needs to be created
var charLen = prompt("Enter Password length between 8-128"); 

var lowLet = confirm("Letters contain lowercase");
// lowLet = should the password contain lowercase letters
//console.log(charLen)

var upLet = confirm("Letters contain uppercase");
//upLet = should the password contain uppercase letters
//console.log(upLet)

var contNums = confirm("Characters contain numbers");
// contNums = should the password contain numbers
//  console.log(contNums)

var contSpec = confirm("Characters contain special characters");
//  contSpec = should the pass word contain special characters 
//  console.log(contSpec)

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();

//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {

//  to string
// function generateRdm(){
//  Math.random().toString(36).slice(2)

} 
for (var i = 0; i < 1; i++) {
  
  var generateRdm = charlow[Math.floor(Math.random() * charlow.length)];
    console.log(generateRdm)
}

// function to write the password

funtion writePassword() {

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
  char = concat(charlow, sym)
}
}