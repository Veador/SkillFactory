// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const city = {
    city: "Moscow",
    population: 15000000
   };

const citizen = Object.create(city); //написал через  прототип для наглядности
citizen.name = "Иван";
citizen.age = "32";

const outputCitizen = (citizen) => {
    for(let key in citizen){
        if(citizen.hasOwnProperty(key)){
           console.log(key+" : "+citizen[key]);
        }
    }
};

outputCitizen(citizen); //надеюсь, я правильно понял, что нужно наличие отдельной функции