// Crie um programa que pergunte o nome do usuário. Exiba uma mensagem diferenciada caso o nome digitado seja "Cicero", "Prático" ou "Heitor". 

//entrada
let nome = prompt("Digite o seu nome");

//saída
document.write("<h3>Aparecerá uma mensagem diferente caso o nome seja Heitor, Cicero ou Prático.</h3>");
document.write("Nome digitado: " + nome + "<p>")
if (nome == "Heitor" || nome == "Cicero" || nome == "Prático")
{
  document.write("Nossa " + nome + " o seu nome é muito irado!");
}
else
{
  document.write("O seu nome é muito legal " + nome);
}
