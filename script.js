function criarBaralho() {
  var naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];
  var valores = ['2', '3', '4', '5', '6', '7', 'Q', 'J', 'K', 'A'];
  var baralho = [];

  for (var naipe of naipes) {
      for (var valor of valores) {
          for (var i = 0; i < 4; i++) { // Adicione quatro unidades de cada carta
              var carta = valor + ' de ' + naipe;
              baralho.push(carta);
          }
      }
  }

  return baralho;
}

function embaralharECriarBaralho() {
  var baralho = criarBaralho();
  baralho = embaralhar(baralho);

  exibirBaralhoNaMesa(baralho);
}

function embaralhar(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}

function embaralharECriarBaralho() {
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

function exibirBaralhoNaMesa(cartasJogador1, cartasJogador2) {
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




