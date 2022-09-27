//Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as medidas dos lados de um triângulo. 

//entrada
let lado1 = parseInt(prompt("Digite o valor do primeiro lado"));
let lado2 = parseInt(prompt("Digite o valor do segundo lado"));
let lado3 = parseInt(prompt("Digite o valor do terceiro lado"));

//saída
document.write("<h3>Informa se os três valores formam um triângulo.</h3>");
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)
{
  document.write(lado1 + "+" + lado2 + "+" + lado3 + " forma um triângulo!");
}
else
{
  document.write(lado1 + "+" + lado2 + "+" + lado3 + " não forma um triângulo!");
}
