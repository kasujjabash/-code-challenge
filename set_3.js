function sortItems(items){
    const results = {
     even: [],  odd: [], char: []
    }
    for (const item of items){
        if(typeof item === 'number'){
            if(item % 2 ===0){
                results.even.push(item)
            }else{
                results.odd.push(item)
            }
        }else if (typeof item === 'string' && item.length ===1){
            results.char.push(item)
        }
}
   return results 
}

let sumArray = [3.0, 'a' , 7, 'x' , 20, 'd' , 4, 'f', 8]
console.log(sortItems(sumArray))


let nums = [1,2,3,1]
let count = 0
for(integer = 0; integer<nums.length; integer++){
    if(nums[integer] === )
}