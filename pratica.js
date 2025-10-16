var nomes = ["Mariana", "Liedson", "Gabriel", "", "Arthur"];
nomes.forEach((nome) => console.log("Nomes foreach:", nome));

var numeros = [10,21,32,43,54,65,76,87,98,109];
const dobro = numeros.map((num) => console.log("Numero dobrado:", num*2));
const impares = numeros.filter((impar) => impar % 2 != 0 );
console.log("Números impares:", impares);