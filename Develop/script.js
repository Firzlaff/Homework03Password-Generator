// Assignment Code
var generateBtn = document.querySelector("#generate"); {
 //   document.getElementById("#generate").addEventListerner("click", "charLen")

        var charLen = prompt("Enter Password length between 8-128"); {
     //     charLen = length of the password that needs to be created


        }

     
}

  var lowLet = confirm("Letters contain lowercase");
// lowLet = should the password contain lowercase letters
console.log(charLen)


  var upLet = confirm("Letters contain uppercase");
// upLet = should the password contain uppercase letters


  var contNums = confirm("Characters contain numbers");
  // contNums = should the password contain numbers

  var contSpec = confirm("Characters contain special characters");
  // contSpec = should the pass word contain special characters 



// this was just for another idea i was thinking about and if i will need to incorp 
// into a for loop with randomization flor.math random.math
// var charlow = ("abcdefghijklmnopqrstuvwxyz");
// var charup = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
// var num = ("0123456789");
//var sym = ("!@#$%?&*");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {


}



