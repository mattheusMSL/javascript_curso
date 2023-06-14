class Pessoa{}

Pessoa.prototype.falar = function (){
  console.log("Olá mundo como está?");
}

Pessoa.prototype.walk = () =>{
  window.alert("Matheus está andando");
}
const Matheus = new Pessoa;
// let button = document.getElementById("btn");
Matheus.falar();

 Clicar = () => {
  addEventListener('click', Matheus.walk())
 }

// Matheus.walk();
