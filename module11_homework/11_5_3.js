(getNum1 = (num1) => {
    return function (num2) {
        console.log(num1+num2)
    }
})(11)(22);
