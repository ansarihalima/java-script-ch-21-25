///////////////////////QUestion-1

var fName = prompt("Enter your first name!");
var lastName = prompt("Enter your last name!");

var fullName = fName+ " " + lastName;
alert ("Hello" + " " + fullName);



///////////////////////Question-2

function displayInputLength() {
    var phoneModel = prompt("Enter Your Favorite phone model name");

    if (phoneModel !== null) {
        var length = phoneModel.length;
        document.getElementById('result').innerHTML = "My favourite Phone Model Name is" + phoneModel +
            "<br> Length of string is: " + length;
    } else {
        document.getElementById('result').innerHTML = 'No input provided.';
    }
}
displayInputLength();


/////////////////////////Question-3

function findIndexOfN() {
    const word = "Pakistani";  
    const letter = "n";        
    
   
    const index = word.indexOf(letter);

    if (index !== -1) {
        
        document.write(` <b> String "${word}" <br> The index of "${letter}" is ${index}.</b>`);
    } else {
        
        document.write(`The letter "${letter}" is not found in the word "${word}".`);
    }
}

findIndexOfN();


/////////////////////////Question-4

function findLastIndexOfL() {
    const word = "Hello World";  
    const letter = "l";          
    
    
    const lastIndex = word.lastIndexOf(letter);

  
    document.write( `<br> <br> <b>String "${word}" <br>  the last index of "${letter}" is ${lastIndex}.</b>`);
}


findLastIndexOfL();


////////////////////////Question-5

function findCharacterAtThirdIndex() {
    const word = "Pakistani";  
    

    const character = word.charAt(3);
    document.write(`<br> <br> <b> String "${word} "<br> Character at  index 3 is "${character}".</b> <br>`);
}

findCharacterAtThirdIndex();

//////////////////////Question-6

function greetUserWithFullName() {
    const firstName = prompt("Enter your first name:");

    const lastName = prompt("Enter your last name:");
    const fullName = firstName + " " + lastName;

   
    alert("Hello," + " " + fullName +" " + "Welcome to our website!");
}


greetUserWithFullName();


/////////////////////////////Question-7

function replaceSubstring() {
    const originalWord = "Hyderabad";  
    const replacedWord = originalWord.replace("Hyder", "Islam");  

    
    document.write(" <br> <b>City:"  + originalWord + "</b>" );
    document.write("<br> <b> After replacement: " + replacedWord + "</b> <br>" );
}
replaceSubstring();

///////////////////////////////Question-8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var updatedMessage = message.replace(/and/g, '&');
console.log(updatedMessage);
alert(updatedMessage);

///////////////////////////////Question-9

var str = "472";
var num = Number(str);

console.log("String value: " + str + ", Type: " + typeof str);
console.log("Number value: " + num + ", Type: " + typeof num);
alert("String value: " + str + ", Type: " + typeof str + "\n" +
      "Number value: " + num + ", Type: " + typeof num);

///////////////////////////////Question-10

var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();
document.write(" <br> Original Input: " + userInput + " <br> Uppercase Input: " + upperCaseInput);


/////////////////////////////Question-11

function toTitleCase(str) {
    return str
        .toLowerCase()                        // Convert entire string to lowercase
        .split(' ')                           // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' ');                           // Join the words back into a single string
}

// Prompt the user for input
let yourInput = prompt("Enter some text:");
let CaseInput = toTitleCase(userInput);
alert("Original Input: " + userInput + "\nTitle Case Input: " + CaseInput);


/////////////////////////////Question-12

var num = 35.36;
var numString = num.toString();
var resultString = numString.replace('.', '');
document.write(" <br> Number: " + numString);
document.write(" <br> Result: " + resultString);



///////////////////////////////Question-13

function containsSpecialSymbol(username) {
    const specialSymbols = ['@', '.', ',', '!'];
    
    for (let symbol of specialSymbols) {
        if (username.includes(symbol)) {
            return true;
        }
    }
    return false;
}

function getValidUsername() {
    let username = '';

    while (true) {
        username = prompt("Enter your username:");
        if (!containsSpecialSymbol(username)) {
            alert("Username is valid.");
            break; 
        } else {
            alert("Invalid username. Please enter a username without special symbols [@ . , !].");
        }
    }
    return username;
}
const validUsername = getValidUsername();
console.log("Valid username entered: " + validUsername);

/////////////////////////////Question-14

var bakeryItem =["cake" ,"apple pie" ,"cookie" ,"chips" ,"cake"]
var userInput = prompt("Welcome to Abc Bakery. What do you want maam/sir?")

let found = bakeryItem.includes(userInput);

if (found) {
    document.write(userInput + " "+  "is available in our bakery")
} else {
 document.write(" <br> Sorry" +" " + userInput + " "+ "is not avilable")   
}

///////////////////////////////Question-16
var university = "University of Karachi";
var array = university.split(""); 
var output = "";

array.forEach(function(character) {
    output += character + "<br>";
});

document.write(output);



var str = "The quick brown fox jumps over the lazy dog";
var lowerStr = str.toLowerCase();

var wordToFind = "the";
var regex = new RegExp("\\b" + wordToFind + "\\b", "g");

var matches = lowerStr.match(regex);
var count = matches ? matches.length : 0;

document.write("<br> TEXT: The quick brown fox jumps over the lazy dog")
document.write(" <br> Number of occurrences of the word '" + wordToFind + "': " + count);
