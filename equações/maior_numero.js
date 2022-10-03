//Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

//entrada
let numero1 = parseFloat(prompt("Digite o primeiro número"));
let numero2 = parseFloat(prompt("Digite o segundo número"));
let numero3 = parseFloat(prompt("Digite o terceiro número"));
let numero4 = parseFloat(prompt("Digite o quarto número"));
let numero5 = parseFloat(prompt("Digite o quinto número"));

//saída
document.write("<h2>Exibir o maior número</h2><p>")
document.write("Primeiro número: " + numero1 + "<br>");
document.write("Segundo número: " + numero2 + "<br>");
document.write("Terceiro número: " + numero3 + "<br>");
document.write("Quarto número: " + numero4 + "<br>");
document.write("Quinto número: " + numero5 + "<br></p>");
if ((numero1 > numero2) && (numero1 > numero3) && (numero1 > numero4) && (numero1 > numero5)) 
{
  document.write(numero1 + " é o maior número!");
}
if ((numero2 > numero1) && (numero2 > numero3) && (numero2 > numero4) && (numero2 > numero5)) 
{
  document.write(numero2 + " é o maior número!");
}
if ((numero3 > numero1) && (numero3 > numero2) && (numero3 > numero4) && (numero3 > numero5))
{
  document.write(numero3 + " é o maior número!");
}
if ((numero4 > numero1) && (numero4 > numero2) && (numero4 > numero3) && (numero4 > numero5))
{
  document.write(numero4 + " é o maior número!");
}
if ((numero5 > numero1) && (numero5 > numero2) && (numero5 > numero3) && (numero5 > numero4))
{
  document.write(numero5 + " é o maior número!");
}
