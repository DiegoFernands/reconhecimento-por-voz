function ChutePossuiValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        console.log('Valor inválido')
    }

    if(numeroPermitido(numero)) {
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
} 
