let input = prompt('Введите число: ');
let num = ++input;
console.log(num);
if (isNaN(num)) {
    console.log('Это не число');
} else if (num===0) {
    console.log('Вы ввели ноль. Введите другое число');
} else if (num % 2 === 0) {
    console.log('Вы ввели нечетное число');
} else {
    console.log('Вы ввели четное число');
}