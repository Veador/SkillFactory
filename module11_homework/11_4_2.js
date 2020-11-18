let num = 73
if (num > 1000) {
    console.log('Данные неверны')
} else if (num === 0) {
    console.log('Это ноль')
} else if (num === 1) {
    console.log('Это единица')
} else {
    function isPrimeNumber(num) {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
            return num > 1;
    }
    if (isPrimeNumber(num) === false){
        console.log(num + ' - число составное')
    } else {
        console.log(num + ' - число простое')
    }
}


