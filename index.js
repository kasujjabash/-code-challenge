// let number = ['red', 'green', 'blue']

// console.log(number.slice(1))
// // console.log(number)
// [bashir, kasujja, joy]

// Bashir Kasujja Joy
// let text = window.prompt("Enter Text....");
// let capitalizedText = text
//   .split(" ")
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(capitalizedText);

// let names = 'joy'
// let newName = names.charAt(0).toUpperCase() + names.slice(1)

// console.log(newName)

// let person = {
//   name: "John Paul",
//   age: 28,
//   isMale: true,
//   wives: ['joan', 'juliet', ]
// };

// console.log(person.wives);

// let user = [
//     {name: 'Bash', age: 80},
//     {name: 'John', age: 10}
// ]

// console.log(user[1].age)

// for (let number = 1; number<=5; number++){
//     console.log(number)
// }

// let names  = 'bashir kasujja' //10
// let count = 0;

// for(let letter = 0; letter<names.length; letter++){
//     if (names[letter] === 'a'){
//         count++
//     }
// }

// console.log(`The number of "a" are ${count}`);

let multiple = 1;
let count = 0;
// 6/3 = 2, no remender 0
while (count < 5) {
  if (multiple % 3 === 0) {
    console.log(multiple);
    count++;
  }
  multiple++;
}

//? To update a repo 
// git init
// git add .
// git commit -m "TYPE ANY MESSAGE"
//git push