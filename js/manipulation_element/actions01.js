let textResult = document.querySelector("#result");

function execute() {
  const tensorOne = tf.tensor([1, 2, 3]);
  //vou adicionar 1 zero no apos o primeiro elemento e dois zero apos o segundo
  const pad = tensorOne.pad([[1, 2]]);

  //concat concatena em unidimensional
  const tensorTwo = tf.tensor([2, 3, 4, 5]);
  const tensorThree = tf.tensor([1, 2, 3, 4]);
  const concat = tensorTwo.concat(tensorThree);
  //e possível concatenar vários tensores
  const concat2 = tf.concat([tensorThree, concat]);

  const tensorFour = tf.tensor([1, 2]);
  const tensorFive = tf.tensor([1, 2]);
  //ele concatena  em bidimensional
  //nao e possível usar diretamente nossa variável precisa da palavra tf
  const stack = tf.stack([tensorFour, tensorFive]);

  const tensorReverse = tf.tensor([1, 2, 3, 4]);
  const reverse = tensorReverse.reverse();

  const tensorSplit = tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 4]);
  //primeiro parametro e o tensor que desejo fazer split
  //segundo parametro e o numero de elementos que desejo quebrar
  //terceiro quantidade que vou saltar para fazer split
  //ou seja o tensorSplitOne vai ser 1,2 e 5,6 e 7,8
  const [tensorSplitOne, tensorSplitTwo] = tf.split(tensorSplit, 2, 1);

  const tensorTile = tf.tensor([1, 2]);
  //vai repetir a sequencia do tensor com a quantidade passada
  //nesse caso duas vezes
  const tile = tensorTile.tile([2]);

  textResult.innerHTML = `Antes do pa =>${tensorOne.toString()}\n`;
  textResult.innerHTML += `\nDepois =>${pad.toString()}\n`;
  textResult.innerHTML += `\nConcat =>${concat.toString()}\n`;
  textResult.innerHTML += `\nConcat2 =>${concat2.toString()}\n`;
  textResult.innerHTML += `\nStack =>${stack.toString()}\n`;
  textResult.innerHTML += `\nAntes do reverse =>\n${tensorReverse}\n`;
  textResult.innerHTML += `\nDepois do reverse =>\n${reverse}\n`;
  textResult.innerHTML += `\nAntes do split =>\n${tensorSplit}\n`;
  textResult.innerHTML += `\nTensor splitOne  =>\n${tensorSplitOne}\n`;
  textResult.innerHTML += `\nTensor splitTwo =>\n${tensorSplitTwo}\n`;
  textResult.innerHTML += `\nAntes do tile =>\n${tensorTile}\n`;
  textResult.innerHTML += `\nDepois do tile =>\n${tile}\n`;
}
