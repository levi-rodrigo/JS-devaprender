// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
//  Match.Floor()
// caso pontos maior que 12 => "Carteira Suspensa"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log('Tudo bem, Você está dentro dos limites de velocidade!')
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if( pontos >= 12)
            console.log('[CARTEIRA SUSPENSA] Respeite os limites da via! ');
        else 
            console.log('Pontos:', pontos);
    }
}
