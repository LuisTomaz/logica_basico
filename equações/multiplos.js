//Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".

//entrada
let valorA = parseInt(prompt("Digite o valor de A"))
let valorB = parseInt(prompt("Digite o valor de B"))

//saída
if ((valorA % valorB == 0) || (valorB % valorA == 0))
{
    document.write("Esses valores são múltiplos");
}
else
{
    document.write("Esses valores não são múltiplos");  
}
