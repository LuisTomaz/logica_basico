// Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).

//entrada
let distancia = parseFloat(prompt("Digite a distância percorrida em km"));
let combustivelutilizado = parseFloat(prompt("Digite quanto de combustível foi necessário em litros"));

//processamento.
let mediagasolinakm = distancia / combustivelutilizado; 

//saída
document.write("<h1>Consumo médio de gasolina</h1>")
document.write("A distância necessária para chegar ao destino foi de: " + distancia + "KM<p>");
document.write("A quantidade de combustível utilizado foi de: " + combustivelutilizado + "L<p>");
document.write("A média de combustível por distância é de: " + mediagasolinakm + "KM/L");
