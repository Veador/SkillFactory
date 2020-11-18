let M = [1,'d',5,0,null,3,4,12,'2',66,0,5];
let nulls = 0, odds = 0, evens = 0;
M.forEach(getAmountOfNumbers);
console.log('Количество нулей: '+ nulls);
console.log('Количество чётных чисел: '+ evens);
console.log('Количество нечётных чисел: '+ odds);


function getAmountOfNumbers(item) {
    if (typeof(item)==='number'){
        if (item===0) {
            ++nulls;
        } else if (item % 2 === 0) {
            ++evens;
        } else {
            ++odds;
        }
    }
}