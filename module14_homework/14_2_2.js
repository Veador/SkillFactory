const jsonString = `
{
    "name":"Anton",
    "age":36,
    "skills":["Javascript","HTML","CSS"],
    "salary":80000
}`;

const data = JSON.parse(jsonString);
const result = JSON.stringify(data);
console.log(data);

//возможно я неправильно понял задание?...
