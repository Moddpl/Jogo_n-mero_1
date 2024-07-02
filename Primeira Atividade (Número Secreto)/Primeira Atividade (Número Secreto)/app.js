alert("Bem vindo ao jogo do número secreto, boa sorte");
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O número secreto é (${numeroSecreto})`);
let chute; // variavel
let tentativas = 1;


// Enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    console.log(`O número chutado foi (${chute})`);

    // Dicas do numero secreto
    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O Número secreto é menor que (${chute})`);

        }
        else {
            alert(`O Número secreto é maior que (${chute})`);
        }
        //contador de tentativas
        tentativas++;
    }
}
 
// correção textual
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
 alert(`Isso ai está correto, o número correto (${numeroSecreto}), você acertou com ${tentativas} ${palavraTentativa}`);