// 1
function fizzBuzz(fizz, buzz) {
  let combinedLength = fizz.length + buzz.length;
  if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
    console.log("FizzBuzz");
  } else if (combinedLength % 5 === 0) {
    console.log("Buzz");
  } else if (combinedLength % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log("Not Divisible either 3 or 5");
  }
}

fizzBuzz("bash", "kasujja");

// 2

let yearOfBirth = window.prompt("Enter Your Year Of Birth");

const currentYear = 2025;

let age = currentYear - yearOfBirth;

if (age < 18) {
  console.log(`You are ${age} Years Old, You're a minor`);
} else if (age < 36) {
  console.log(`You are ${age} Years Old, You're a Youth`);
} else {
  console.log(`You are ${age} Years Old, You're an Adult`);
}

// 3
// list of numbers nums = [2,4,5,6,7]
//Target 9
// Function to find two numbers in the array that add up to the target using one loop
function twoSum(nums, target) {
  const numberFound = {};
  for (let number = 0; number < nums.length; number++) {
    const newNumber = target - nums[i];
    if (numberFound.hasOwnProperty(newNumber)) {
      return [numberFound[newNumber], number];
    }
    numberFound[nums[number]] = number;
  }
}

console.log(twoSum([2, 4, 5, 6, 7], 9));
