let input = 'Hello12345'
let inputL = input.length
let output = ''
while (inputL >= 0) {
    output += input.charAt(inputL-1)
    --inputL
}
console.log('Строка: '+ output);