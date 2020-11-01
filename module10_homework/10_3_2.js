let X = prompt('Введите значение: ');
T = typeof X
switch (T) {
    case "string":
        console.log('Это строка')
        break;
    case "number":
        console.log('Это число')
        break;
    case "boolean":
        console.log('Это логический тип')
        break;
    default:
        console.log('Тип не определен');
}
