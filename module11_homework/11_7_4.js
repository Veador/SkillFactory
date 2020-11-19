let min = 1;
let max = 10;
const intervalId = (min,max) => {
    if (min<=max) {
        console.log(min)
        min++
    } else {
        clearInterval(intervalId)
    }
};
setInterval(intervalId, 1000, min, max);

//пока не получается



