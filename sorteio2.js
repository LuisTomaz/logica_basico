//Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números, não necessariamente na mesma ordem.

//entrada
let tentativa1 = parseInt(prompt("Primeira tentativa"))
let tentativa2 = parseInt(prompt("Segunda tentativa"))

//processamento
let sorteio1 = (Math.floor(Math.random() * 5 + 1))
let sorteio2 = (Math.floor(Math.random() * 5 + 1))

//saída
document.write("<h2>Acerte os 2 sorteios</h2>");
document.write("Primeiro sorteio: " + sorteio1 + "<br>");
document.write("Segundo sorteio: " + sorteio2 + "<p>");
document.write("Primeira tentativa: " + tentativa1 + "<br>");
document.write("Segunda tentativa: " + tentativa2 + "<p>");
if (((tentativa1 == sorteio1) || (tentativa1 == sorteio2)) && ((tentativa2 == sorteio1) || (tentativa2 == sorteio2)))
{
  document.write("Você acertou os dois sorteios, parabéns!");
}
else
{
  document.write("Você errou, tente novamente.");
}
