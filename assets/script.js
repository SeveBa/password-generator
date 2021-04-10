// Assignment Code
var generateBtn = document.querySelector("#generate");

function getpasswordLength(){
var length = prompt("type in the length of your desired password. must be between 8 and 128 characters")

  if (length < 8 || length > 128){
    alert('must be between 8 and 128 characters')
    getpasswordLength()
  }
  return length 
}

function getpasswordOptions(){
  // Use confirms to individually ask upper case, lower case, numbes, special characters. These need to be stored as their own variables.
  // If statement if all = false then run (alert) and function again. If all is
  // Else, return options
}

function generatePassword(){
  var passwordLength = getpasswordLength()
  console.log(passwordLength)

  var passwordOptions = getpasswordOptions()
  //console.log(passwordOptions)
  var characteroptions = [ ]

  // Create conditional statements to determine whether or not to concat 
  // to concat to character options array
  // this will need 4 different options 


  // return "thispasswordisweak"
}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  // console.log(password)

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//