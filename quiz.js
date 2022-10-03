let count= 0;
let pergunta1 = prompt("Qual é o coletivo de peixes?")
if (pergunta1 == "cardume")
{
  alert("Você acertou!");
  count++
}
else
{
  alert("Você errou.");
}
let pergunta2 = prompt("O morcego é um mamífero?")
if (pergunta2 == "sim")
{
  alert("Você acertou!");
  count++
}
else
{
  alert("Você errou.")
}
let pergunta3 = prompt("Qual é o aumentativo de fogo")
if (pergunta3 == "fogaréu")
{
  alert("Você acertou");
  count++
}
else
{
  alert("Você errou");
}


//saída
if (count == 3)
{
  document.write("Você acertou todas!")
}
if (count == 2)
{
  document.write("Você acertou duas, continue se esforçando!")
}
if (count == 1)
{
  document.write("Você acertou apenas uma, não desista!")
}
if (count == 0)   
{
  document.write("Você errou todas, foque mais!")
}
