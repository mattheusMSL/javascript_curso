function exibir(num){
  console.log("O resultado é: " + num)
}

function soma (a,b, callback){
  let op = a + b ;
  callback(op);
}

function multiplication(a,b,cb){
  let op = a * b ;
  cb(op);
}

soma(4,4, exibir);
multiplication(3,3,exibir);