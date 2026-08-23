// Reduce 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 0; 
const sumWithInitial = nums.reduce( (accumulator, currValue) => accumulator + currValue, initialValue )
// const sumWithInitial = nums.reduce( (accumulator, currValue) => (accumulator + currValue), initialValue )
console.log(sumWithInitial) 

const sumWithInital2 = nums.reduce( (acc, num) =>{
    console.log(`Accumulator = ${acc}, current num value = ${num}`)
    return acc + num
}, 0) // we have to give the initialValue AFTER the function. 
console.log(sumWithInital2)


const shoppingCart = [
    {
        itemName : "JS-Course", 
        price : 2999
    },
    {
        itemName : "Python Course", 
        price : 5999
    },
    {
        itemName : "Mobile Dev Course", 
        price : 8999
    },
    {
        itemName : "Data Science Course", 
        price : 12999
    }
]

// const addedPrices = shoppingCart.reduce( (acc, item) => {
//     return acc + item.price
// }, 0)
const addedPrices = shoppingCart.reduce( (acc, item) => (acc + item.price), 0 )
console.log(addedPrices)