export function exibirBaralhoNaMesa(cartasJogador1, cartasJogador2) {
  var mesa = document.querySelector('.mesa');

  // Limpar a mesa antes de adicionar as cartas
  mesa.innerHTML = '';

  var divJogador1 = document.createElement('div');
  divJogador1.classList.add('jogador-1');
  var divJogador2 = document.createElement('div');
  divJogador2.classList.add('jogador-2');

  for (var carta of cartasJogador1) {
      var span = document.createElement('span');
      span.textContent = carta;
      span.classList.add('carta');
      divJogador1.appendChild(span);
  }

  for (var carta of cartasJogador2) {
      var span = document.createElement('span');
      span.textContent = carta;
      span.classList.add('carta');
      divJogador2.appendChild(span);
  }

  mesa.appendChild(divJogador1);
  mesa.appendChild(divJogador2);
}
