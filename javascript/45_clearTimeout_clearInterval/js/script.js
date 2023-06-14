let h1 = document.createElement('h1');
var text = document.createTextNode("Hello There");
let body = document.getElementsByTagName('body');
 h1.appendChild(text);
 body[0].appendChild(h1)

var changingTheColor = document.querySelector('h1');
changingTheColor.addEventListener("mouseover", () => {
    document.body.style.color = "red";
    document.body.style.backgroundColor = "black";
});

changingTheColor.addEventListener("mouseout", () => {
  document.body.style.color = "black";
  document.body.style.backgroundColor = "white";
});

//clear timeOut
let x = 0;

var myTimer = setTimeout(function(){
   console.log("O x é 0");
}, 20000);

x = 5;

if (x > 0){
  clearTimeout(myTimer);
  console.log("O x é 5");
}

// clearInterval na prática 

var myInterval = setInterval(function() {
  console.log("Imprimindo intervalo");
}, 200);

setTimeout(function(){
 console.log("Aqui vai para de imprimir o interval");
 clearInterval(myInterval);
}, 1500);

// async function

