//Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.

//Entrada
let n1 = parseInt(prompt("Digite um número"));

//saída
document.write("<h1>Números entre 15 e 25 ou 45 e 50</h1>");
if ((n1 > 15 && n1 <25) || (n1 > 45 && n1 < 50))
{
  document.write(n1 + " está entre 15 e 25 ou 45 e 50");
}
else
{
  document.write(n1 + " não está entre 15 e 25 ou 45 e 50");
}
