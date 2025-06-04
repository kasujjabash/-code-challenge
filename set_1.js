//capitalizes the first letter

let text = window.prompt("Enter text...");
let capitalizedText = text
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(capitalizedText);

//counting the number of letter "a"

function countCharacters(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}

let results = countCharacters("JavaScript is amazing", "a");
console.log(`The letter appears ${results} times`);

// first 5 multiples of 3
let number = 1;
let count = 0; //tracks how many numbers are being printed
while (count < 5) {
  if (number % 3 === 0) {
    console.log(number); 
    count++;
  }
  number++;
}

