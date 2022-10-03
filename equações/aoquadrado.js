//entrada

let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));
let numero3 = parseFloat(prompt("Digite o terceiro número: "));
let numero4 = parseFloat(prompt("Digite o quarto numero: "));
let numero5 = parseFloat(prompt("Digite o quinto número: "))

//processamento

let valor1 = numero1 ** 2;
let valor2 = numero2 ** 2;
let valor3 = numero3 ** 2;
let valor4 = numero4 ** 2;
let valor5 = numero5 ** 2;

//saída

document.write("<h2>5 números elevados ao quadrado:</h2>");
document.write("Primeiro número: " + numero1); 
document.write("<br>Segundo número: " + numero2);
document.write("<br>Terceiro número: " + numero3);
document.write("<br>Quarto número: " + numero4);
document.write("<br>Quinto número: " + numero5);
document.write("<h2>Resultado dos números ao quadrado:</h2>")
document.write("Primeira conta: " + valor1);
document.write("<br>Segunda conta: " + valor2);
document.write("<br>Terceira conta: " + valor3);
document.write("<br>Quarta conta: " + valor4);
document.write("<br>Quinta conta: " + valor5);
