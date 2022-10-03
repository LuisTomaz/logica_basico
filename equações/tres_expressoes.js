//Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: 
// D = R+S/2 ONDE R = (A+B) **2 E S = (B+C) **2

//entrada
let numeroA = parseInt(prompt("Digite o valor de A"))
let numeroB = parseInt(prompt("Digite o valor de B"))
let numeroC = parseInt(prompt("Digite o valor de C"))

//processamento
let valorR = ((numeroA + numeroB) **2)
let valorS = ((numeroB + numeroC)  **2)
let valorD = ((valorR + valorS) / 2)

//saída
document.write("<h2>Cálculo de uma expressão</h2>");
document.write("<p>Valor A: " + numeroA + ", Valor de B: " + numeroB + " e Valor de C: " + numeroC);
document.write("<p>Valor de R: " + valorR);
document.write("<p>Valor de S: " + valorS);
document.write("<p>Valor de D: " + valorD);
