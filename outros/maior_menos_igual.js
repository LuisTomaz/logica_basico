//Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor  que 25 ou igual a 40.

//entrada
let n1 = parseFloat(prompt("Digite um número"));

//saída
document.write("<h3>Aparecerá uma mensagem que o número é legal caso ele for maior que 80, menor que 25 ou igual a 40.</h3>")
if (n1 < 25 || n1 > 80 || n1 == 40)
{
  document.write(n1 + " é um número legal!");
}
else
{
  document.write(n1 + " é um número chato :(")
}
