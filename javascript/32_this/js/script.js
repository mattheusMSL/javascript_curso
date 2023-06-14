 const Person = {
  name: "Matheus",
  lastname: "Lopes",
  age: 20,
  Profession: "Developer",
  greeting: function() {
   return "Hello my name is " + this.name + " " + this.lastname + ", I am " + this.age + " years old!" +
  " and I'm currently studying some technologies to become a " + this.Profession + " in the future!";
  } 
 }

let  matheus = Person.greeting();

 const body = document.getElementsByTagName('body');
 const parag = document.createElement('p');

body[0].appendChild(parag)

const getPara = document.getElementsByTagName('p');
const text = document.createTextNode(matheus);

getPara[0].appendChild(text);
// const text = document.createTextNode();