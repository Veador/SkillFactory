// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const city = {
    city: "Moscow",
    population: 15000000
   }

const citizen = Object.create(city)
citizen.name = "Иван"
citizen.age = "32"

// let output = (city) => {
//     for (let key in city) {
//         if(city.hasOwnProperty(key)){
//             console.log(key+" : "+city[key])
//         }
//     }
// }

// for (let key in citizen) {

//     // выводим все названия свойств
//     console.log(citizen[key]);
// }

console.log(citizen.name);