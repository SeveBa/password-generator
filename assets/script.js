// Assignment Code
// var generateBtn = document.querySelector("#generate");

// uppercase character definition
// var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N" "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// lowercase charater definition
// const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// number definition
// const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];

// special character definition
// const specialCharacter = ["@", "#", "$", "%", "^", "&", "*", "_", "-", "/", "\", "!"];

// Generate password function
function generatePassword(){}

// Establish password length
function passwordLength(){
var length = alert("Type in the length of your desired password. Must be between 8 and 128 characters.")


  if (length < 8 || length > 128){
    alert('must be between 8 and 128 characters')
    getpasswordLength()
    console.log(length)
  }
  


// function getpasswordOptions(){
  // Use confirms to individually ask upper case, lower case, numbers, special characters. These need to be stored as their own variables.
  
  // Upper case letter prompt
  function getuppercaseLetter (){
  var uppercase = prompt("choose a upper case letter")

    if (// leter is not uppercase){
      alert('must be a upper case letter!')
      getuppercaseLetter()
    }
    return uppercaseLetter

    // if password has upper case letter
    if (promptuppercaseLetter = uppercase) {
    // confirm character input is upper case characters?
    var confirm = window.confirm("is character upper case?");

  // Lower case letter prompt
  function getlowercaseLetter(){  
  var lowercase = prompt("choose a lower case letter")

    if (// leter is not lowercase){
      alert('must be a lower case letter!')
      getlowercaseLetter()
    }
    return lowercaseLetter

    // if password has lower case letter
    if (promptlowercaseLetter = lowercase) {
      // confirm character input is lower case characters?
      var confirm = window.confirm("is character lower case?");
    }

  // Number prompt
  function getNumber(){
  var number = prompt("choose a number")
  
    if (// character is not a number){
      alert('must be a number!'){
      getNumber()
    }
    return number 

    // if password has number
    if (promptnumber = number) {
      // confirm character input is number?
      var confirm = window.confirm("is input a number?");

  // special character prompt
  function getspecialCharacter(){
  var specialcharacter  = prompt("choose a special character")  
  
    // if (special character is not a special character)
    //   alert('must be a special character!'){
    //   getspecialCharacter() 
    //   return specialcharacter 
    // }
    
    // if password has special character
    if (promptspecialCharacter = specialcharacter) {
      // confirm character input is special character?
      var confirm = window.confirm("is input a special character?");
}
  // If statement if all = false then run (alert) and function again. If all is accepted, move to generate password.
    if (getpasswordOptions){
      window.alert("password requirements have been accepted")
      break;
    }

    else{
    window.alert("password does not meet requirements")   
    }
    

  // Else, return options
  // If false, run getpasswordLength function again
  else {
    getpasswordLength();
    }

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