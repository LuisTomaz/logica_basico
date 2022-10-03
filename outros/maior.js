//Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

//entrada
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));

//saída
document.write("<h1>Informar entre dois números o maior</h1>");
document.write("Primeiro número: " + numero1);
document.write("<p>Segundo número: " + numero2);
if (numero1 > numero2)
{
 document.write("<p>maior número: " + numero1)
}
  else 
{
    document.write("<p>maior número: " + numero2)
}
