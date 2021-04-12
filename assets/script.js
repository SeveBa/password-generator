// Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function exposePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Character choices for password randomizer array
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialCharacter = "~!@#$%^&*()_+{}|<>?/[]";
var noInput = "";

// Confirm character input from user
function characterInput(){
  var upperCaseLetterInput = prompt("Please select upper case letter.")
  var lowerCaseLetterInput = prompt("Please select lower case letter.")
  var numberInput = prompt("Please select a number.")
  var specialCharacterInput = prompt("Please select a special character.")

  // Input from user choices. If true then include with characterInput
  if(upperCaseLetterInput === true){
    noInput = noInput + upperCaseLetter;
  }
  if(lowerCaseLetterInput === true){
    noInput = noInput + lowerCaseLetter;
  }
  if(numberInput === true){
    noInput = noInput + number;
  }
  if(specialCharacterInput === true){
    noInput = noInput + specialCharacter;
  }
}  

// Generate password function
function generatePassword(){

// Establish password length when prompted
  var passwordLength = prompt("Type in the length of your desired password. Must be between 8 and 128 characters.");
  
    if (passwordLength < 8 || passwordLength > 128){
      alert('Must be between 8 and 128 characters.')
      generatepassword();
    }

// Call the function characterInput
characterInput();

// Creates string variable for password option
var password = "";

// For loop will generate random variable based on password character length selection
for(var i = 0; i < passwordLength; i++){

  var randomIndex = Math.floor(Math.random() * noInput.length);
  var randomizedCharacter = noInput[randomIndex];

  // Generates additional character for password complexity
  password = password + randomizedCharacter;
  }
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", exposePassword);