let M = ['d','d','d',1,'d'];
let m = [];
M.forEach(myFunction);
if (m.includes('0')){
    console.log('false')
}else {
    console.log('true')
}


function myFunction(item) {
    if (M[0] !== item){
        m.push('0')
        //console.log(m);
    }else {
        m.push('1')
        //console.log(m);
    }
}

