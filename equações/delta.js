// Fazer um algoritmo para ler os valores dos coeficientes A, B e C de uma equação quadrática. Calcular e imprimir o valor do discriminante (delta). Delta = B²– 4AC.

//entrada
let valora = parseFloat(prompt("Digite o valor de a"));
let valorb = parseFloat(prompt("Digite o valor de b"));
let valorc = parseFloat(prompt("Digite o valor de c"));

//processamento
let delta = parseFloat((valorb ** 2) - 4 * valora * valorc);

//saída
document.write("<h1>Equação de segundo grau</h1>");
document.write("O valor de delta é igual a " + delta)
