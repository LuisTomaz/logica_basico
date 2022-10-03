//Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.

//entrada
let qtdehomens = parseInt(prompt("Digite a quantidade de homens na festa: "));
let qtdemulheres = parseInt(prompt("Digite a quantidade de mulheres na festa: "));

//processamento
let valorhomens = parseInt(qtdehomens * 20);
let valormulheres = parseInt(qtdemulheres * 17);
let valortotal = parseInt(valorhomens + valormulheres);

//saída
document.write("<h1>Cálculo de uma festa</h1>");
document.write("Quantidade de mulheres na festa: " + qtdemulheres);
document.write("<br>");
document.write("Valor somente das mulheres" + valormulheres + "R$");
document.write("<p>");
document.write("Quantidade de homens na festa: " + qtdehomens);
document.write("<br>");
document.write("Valor somente dos homens: " + valorhomens + "R$");
document.write("</p><p>");
document.write("Valor total arrecadado com a entrada de homens e mulheres:" + valortotal + "R$");
document.write("</p>");
