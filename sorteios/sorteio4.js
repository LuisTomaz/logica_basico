//Sorteie um número de 1 a 100, exiba na tela e informe se é um número par ou ímpar.

//entrada
let chance1 = parseInt(prompt("Primeira tentativa"))
let chance2 = parseInt(prompt("Segunda tentativa"))

//processamento
let numerosort = Math.floor(Math.random() * 10 + 1)

//saída
document.write("<h2>Duas chances para acertar o sorteio</h2>");
document.write("O número sorteado foi: " + numerosort + "<br>");
document.write("Primeira tentativa: " + chance1 + "<br>");
document.write("Segunda tentativa: " + chance2 + "<br>");
if ((chance1 == numerosort) || (chance2 == numerosort))
{
    document.write("Parabéns, você acertou!");
}
else
{
    document.write("Que pena, você errou!");
}
