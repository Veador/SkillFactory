let input = 'Hello12345'
let inputL = input.length
let output = ''
while (inputL >= 0) {
    output += input.charAt(inputL-1)
    --inputL
}
console.log('Строка: '+ output);

// Интересный способ перевернуть строку :) всё работает верно, задание засчитала. Но есть более простое и быстрое решение:

let string = 'Hello';
let reversedString = string.split('').reverse().join('');