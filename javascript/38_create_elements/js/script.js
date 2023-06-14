let novoParagrafo = document.createElement('p');
let texto = document.createTextNode("Este é o conteúdo do parágrafo!");
const body = document.querySelector('body');

novoParagrafo.appendChild(texto);
body.appendChild(novoParagrafo);

// import React from 'react';

// export default function App(){
//   return (
//     <div>   
//      <h1> Hope I can fulfil that void somehow  </h1>
//     </div>
//   );
// }