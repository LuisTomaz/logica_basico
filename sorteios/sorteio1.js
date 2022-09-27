//Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7.

//processamento
let sorteio1 = (Math.floor(Math.random() * 10 + 1))
let sorteio2 = (Math.floor(Math.random() * 10 + 1))

//saída
document.write("<h2>Sorteio de 1 a 10, informar se estão entre de 3 e 7</h2>");
document.write("Primeiro sorteio: " + sorteio1 + "<br>");
document.write("Segundo sorteio: " + sorteio2 + "<p>");
if ((sorteio1 > 3) && (sorteio1 < 7))
{
    document.write("O primeiro sorteio está entre 3 e 7.<br>");
}
else
{
    document.write("O primeiro sorteio não está entre 3 e 7 <p>")
}
if ((sorteio2 > 3) && (sorteio2 < 7))
{
    document.write("O segundo sorteio está entre 3 e 7.")
}
else
{
    document.write("O segundo sorteio não está entre 3 e 7.")
}
