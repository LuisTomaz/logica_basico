//entrada
let base = parseFloat(prompt("Digite o valor da base do retângulo"));
let altura = parseFloat(prompt("Digite o valor da altura do retângulo"));

//processamento
let area = base * altura;
let perimetro = 2 * (base + altura);

//saída
document.write("<h2>Calculadora da piscina retangular</h2>");
document.write("Valor da base: " + base);
document.write("<br>Valor da altura: " + altura);
document.write("<br>Cálculo da área: " + area);
document.write("<br>Cálculo do perímetro: " + perimetro);
