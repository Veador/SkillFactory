//const DOMParser = require("xmldom").DOMParser;
const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/html");

const listNode = xmlDOM.querySelector("list");

let list = [];

const students = listNode.querySelectorAll("student");

students.forEach(function (student) {
  let studentNode = student;
  const nameNode = studentNode.querySelector("name");
  const firstNameNode = nameNode.querySelector("first");
  const secondNameNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");

  const studentObj = {
    name: firstNameNode.textContent + " " + secondNameNode.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
  };

  list.push(studentObj);
});

console.log("list: ", list);
