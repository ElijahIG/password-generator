// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = [];
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%&?/\\";
  var charactersToGrab = "";

  var passLength = parseInt(prompt("Enter a password length:"));

  if (isNaN(passLength)) {
    alert("Must be a number");
    return "";
  }

  if (passLength < 8) {
    alert("Password must have more than 7 characters");
    return "";
  }

  if (passLength > 128) {
    alert("Password must have less than 128 characters");
    return "";
  }

  var upperQuestion = confirm("Do you want to include uppercase letters?");
  if (upperQuestion) charactersToGrab += uppercase;

  var lowerQuestion = confirm("Do you want to include lowercase letters?");
  if (lowerQuestion) charactersToGrab += lowercase;

  var numbersQuestion = confirm("Do you want to include numbers?");
  if (numbersQuestion) charactersToGrab += numbers;

  var specialQuestion = confirm("Do you want to include special characters?");
  if (specialQuestion) charactersToGrab += specialCharacters;

  console.log(charactersToGrab);

  for (var i = 0; i < passLength; i++) {
    var randomChar =
      charactersToGrab[Math.floor(Math.random() * charactersToGrab.length)];
    password.push(randomChar);
  }

  return password.join("");
}
// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  //passwordText.value = password;
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
