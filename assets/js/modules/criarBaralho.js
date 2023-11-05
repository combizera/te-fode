export function criarBaralho() {
  var naipes = ['Ouros', 'Espadas', 'Copas', 'Paus'];
  var naipesSimbolos = ['♦', '♠', '♥', '♣'];
  var valores = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];
  var baralho = [];

  for (var naipe of naipes) {
      var simboloNaipe = naipesSimbolos[naipes.indexOf(naipe)];
      for (var valor of valores) {
          for (var i = 0; i < 4; i++) {
              var carta = valor + ' ' + simboloNaipe;
              baralho.push(carta);
          }
      }
  }

  return baralho;
}