// Написать функцию, которая создает пустой объект, но без прототипа.

const makeObj = (protoName) => {
    const obj = Object.create(protoName);
    console.log(Object.getPrototypeOf(obj))
}
makeObj(null);