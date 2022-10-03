//Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

//entrada
let numero = parseInt(prompt("Digite um número"));

//saída
document.write("<h2>Definir se o número é ímpar ou par</h2>");
if (numero % 2 == 0)
{
  document.write("O número " + numero + " é PAR");
}
else
{
  document.write("O número " + numero + " é ÍMPAR")
}
