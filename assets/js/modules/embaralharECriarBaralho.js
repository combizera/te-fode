export function embaralharECriarBaralho() {
  var baralho = criarBaralho();
  baralho = embaralhar(baralho);

  // Distribuir cartas para o Jogador 1 e o Jogador 2
  var cartasJogador1 = [];
  var cartasJogador2 = [];

  for (var i = 0; i < 1; i++) {
      cartasJogador1.push(baralho.pop());
      cartasJogador2.push(baralho.pop());
  }

  exibirBaralhoNaMesa(cartasJogador1, cartasJogador2);
}