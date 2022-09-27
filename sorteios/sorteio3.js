//Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.

//entrada
let chance1 = parseInt(prompt("Primeira tentaiva"))
let chance2 = parseInt(prompt("Segunda tentativa"))

//processamento
let sorteio = (Math.floor(Math.random() * 10 + 1))

//saída
document.write("<h2>Sorteio de 1 a 10 com duas chances, mostra se é maior que a primeira chance.</h2>");
document.write("Número sorteado: " + sorteio + "<br>")
document.write("Primeira tentativa: " + chance1 + "<br>");
document.write("Segunda tentativa: " + chance2 + "<p>");
if ((sorteio == chance1) || (sorteio == chance2))
{
  document.write("Você acertou, parabéns!<br>");
}
else
{
  document.write("Você errou, tente novamente.<br>");
}
if (sorteio > chance1)
{
  document.write("O número sorteado é maior que a primeira tentativa");
}
