// 1
function fizzBuzz(fizz, buzz){
    let combinedLength = fizz.length + buzz.length;
    if( combinedLength % 3 === 0 && combinedLength % 5 === 0){
        console.log('FizzBuzz')
    }else if(combinedLength % 5 ===0){
        console.log('Buzz')
    }else if(combinedLength % 3 === 0){
        console.log('Fizz')
    }else{
        console.log('Not Divisible either 3 or 5')
    }
    
}

fizzBuzz('b', 'b0bb')


// 2

let yearOfBirth = window.prompt("Enter Your Year Of Birth")

const currentYear = 2025

let age = currentYear - yearOfBirth;

if (age < 18){
    console.log(`You are ${age} Years Old, You're a minor`)
} else if (age < 36){
        console.log(`You are ${age} Years Old, You're a Youth`)
}else{
        console.log(`You are ${age} Years Old, You're an Adult`)
}

// 3 
// list of numbers nums = [2,4,5,6,7]
//Target 9
function twoSum(nums, target){
    for (let position = 0; position< nums.length; position++){
        let currentNumber = nums[position]
        let newNumber = target - currentNumber
        if(newNumber){
            
        }
    }

console.log(twoSum([1,2,3,4,5,6], 4))
    
}


