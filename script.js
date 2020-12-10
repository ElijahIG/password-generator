// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
  var password = [];

  var passLength = prompt("Enter a password length:");
  passLength = parseInt(passLength);

  if (passLength < 8) {
    alert("Password must have more than 7 characters");
    return "";
  }

  if (passLength > 128) {
    alert("Password must have less than 128 characters");
    return "";
  }

  for (var i = 0; i < passLength; i++) {
    var randomChar = lowercase[Math.floor(Math.random() * lowercase.length)];
    password.push(randomChar);
  }

  return password.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
