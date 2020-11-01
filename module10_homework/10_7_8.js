let myMap = new Map ([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry",    "blue"]
]);

for (let name of myMap.keys()){
    console.log(name+' '+myMap.get(name))
}