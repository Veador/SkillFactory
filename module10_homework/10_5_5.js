let M = ['Hello',2,true,'123']
console.log('Количество символов в массиве: ' + M.length);
M.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}