let M = [1,'d',5,0,null,3,4,12,'2',66,0,5,NaN];
let nulls = 0, odds = 0, evens = 0;
M.forEach(myFunction);
console.log('Количество нулей: '+ nulls);
console.log('Количество чётных чисел: '+ evens);
console.log('Количество нечётных чисел: '+ odds);


function myFunction(item) {
    if (typeof(item)==='number' && !isNaN(item)){
        if (item===0) {
            ++nulls;
        } else if (item % 2 === 0) {
            ++evens;
        } else {
            ++odds;
        }
    }
}

// В задании есть недочет: не хватает проверки на NaN. Это значение имеет особенность: его тип равен number, хотя NaN не является числом. Для того, чтобы отсеять эти значения, нужно использовать специальную функцию isNaN. Выше исправила