//Sorteie um número de 1 a 100, exiba na tela e informe se é um número par ou ímpar.

//processamento
let numerosort = Math.floor(Math.random() * 100 + 1) 
let par = (numerosort % 2 == 0)

//saída
document.write("<h2>Sorteio de 1 a 100 e se é ímpar ou par</h2>");
document.write("Número sorteado: " + numerosort + "<br>");
if (par)
{
  document.write("O número sorteado é par!<br>");
}
else
{
  document.write("O número sorteado é ímpar!");
}
