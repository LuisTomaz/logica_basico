//Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela.

//entrada
let nota1 = parseFloat(prompt("Digite o valor da nota da sua primeira avaliação: "));
let nota2 = parseFloat(prompt("Digite o valor da nota da sua segunda avaliação: "));

//processamento
let media = parseFloat((nota1 + nota2) / 2);

//saída
document.write("<h2>Média entre as duas provas</h2>");
document.write("Nota da primeira prova: " + nota1);
document.write("<p>");
document.write("Nota da segunda prova: " + nota2);
document.write("</p><p>");
document.write("A média é igual a: " + media);
document.write("</p>");
