

var n1, n2; 

n1 = prompt("Digite o primeiro número: ");
n1 = parseInt(n1); 
console.log(n1);

n2 = prompt("Digite o segundo número: ");
n2 = parseInt(n2); 
console.log(n2);


function Calculadora(n1,n2, operador){
    
    switch (operador){
    
        case '+': 
            return `A soma dos dois números é: ${n1 + n2}`;
        break;
    
        case '-':
            return `A subtração dos dois números é: ${n1 - n2}`;
        break;
    
        case '/':
            return `A divisão dos dois números é: ${n1 / n2}`;
        break;
    
        case '*':
            return `A multiplicação dos dois números é: ${n1 * n2}`;
        break;
    
        default:
            return "Opção inválida!"
        break;
    
    }
}

var operadores = prompt("Escolha qual operação deseja fazer: + - / *");
var resultado = Calculadora(n1, n2, operadores);

var ExibidorDeResultadosTela = alert(resultado);

