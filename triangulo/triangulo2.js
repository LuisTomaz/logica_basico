//Incremente o exercício anterior, para o caso das medidas formarem um triângulo válido , informar qual o tipo de triângulo que eles formam: equilátero, isósceles ou escaleno.

//entrada
let lado1 = parseInt(prompt("Digite o valor do primeiro lado"));
let lado2 = parseInt(prompt("Digite o valor do segundo lado"));
let lado3 = parseInt(prompt("Digite o valor do terceiro lado"));

//saída
document.write("<h3>Definir se forma um triângulo e qual tipo ele é</h3>")
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1)
{
  document.write(lado1 + " + " + lado2 + " + " + lado3 + " forma um triângulo!<br>");
  if (lado1 == lado2 && lado2 == lado3)
  {
    document.write("E ele é equilátero.");
  }
  else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
  {
    document.write("E ele é isóceles.");
  }
  else 
  {
    document.write("E ele é escaleno.");
  }
}
else
{
  document.write(lado1 + "+" + lado2 + "+" + lado3 + " não forma um triângulo!");
}
