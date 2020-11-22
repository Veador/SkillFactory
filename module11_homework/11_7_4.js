const printNumbers = (min,max) => {
    let current = min;

    let timerId = setInterval(function(){
        console.log(current);
        if (current==max){
            clearInterval(timerId);
        }
        current++;
    },1000);
}
printNumbers (5,15);