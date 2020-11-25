// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.


const obj = {a:"1", b:"2"};
let output="";

const check = (str,obj) => {
    for(let key in obj){
        output = (str===key)
        if (output === true) return;
    }
}

check("a",obj);
console.log(output);