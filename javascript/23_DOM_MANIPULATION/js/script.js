const list = ["Laranja", "Maçã", "Pera", "Jaca", "Limão"];
const listul = document.createElement('ul');
const body = document.getElementsByTagName('body');

// console.log(body[0]);

body[0].appendChild(listul);

let listNoBody = document.getElementsByTagName('ul');

// console.log(listNoBody[0])

// console.log(creatingUlList);

for(let i = 0; i < list.length; i++){
   const liFor = document.createElement('li');
   const textLi = document.createTextNode(list[i]);
   liFor.appendChild(textLi);
   listNoBody[0].appendChild(liFor);
  
}