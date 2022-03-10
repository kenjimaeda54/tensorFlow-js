let textResult = document.querySelector("#result");

function execute() {
  const tensorOne = tf.tensor([3, 4, 6, 4]);
  const tensorTwo = tf.tensor([1, 5, 3, 5]);
  //vai somar o primeiro com o segundo de acordo com as posições do array
  //isto e valido para operações matemáticas  soma, subtração, multiplicação, divisão
  const resultSum = tensorOne.add(tensorTwo);
  const resultSub = tensorOne.sub(tensorTwo);
  const resultMul = tensorOne.mul(tensorTwo);
  const resultDiv = tensorOne.div(tensorTwo);
  //ele idêntica ao div porem arrendonda o valor para baixo
  const resultFloorDiv = tensorOne.floorDiv(tensorTwo);
  //addn idêntico ao add porem permite somar mais que apenas dois tensores
  //nela usa a palavra reservada tf
  const tensorThree = tf.tensor([4, 2, 3, 5]);
  const tensorAddN = tf.addN([tensorOne, tensorTwo, tensorThree]);
  //vai comparar o arrayOne com o arrayTwo e retornar os valores maiores
  //precisar ser mesma quantidade de itens
  const tensorMaximum = tensorOne.maximum(tensorTwo);
  //mesmo principio do maximum
  //porem ele retorna o menor valor
  const tensorMinimum = tensorOne.minimum(tensorTwo);
  //a função mod retorna o resto da divisão
  const tensorFive = tf.tensor([4, 6, 7, 9]);
  const tensorSix = tf.tensor([2, 2, 3, 4]);
  const resultMod = tensorFive.mod(tensorSix);
  //função pow ele vai pegar o primeiro valor elevar na potencia do outro valor
  //exemplo 2 x 2 x 2 x2 x2
  //valor e 2 e a potencia 5
  const tensorSeven = tf.tensor([2, 3]);
  const tensorEight = tf.tensor([5, 3]);
  const resultPow = tensorSeven.pow(tensorEight);
  //squaredDifference retorna a diferença quadrada entre os dois tensores eleva ao quadrado
  //5 -3 = 2 elevado ao quadrado = 4
  //4 -2 = 2 elevado ao quadrado =4
  const tensorNine = tf.tensor([5, 4]);
  const tensorTen = tf.tensor([3, 2]);
  const resultSquareDifference = tensorNine.squaredDifference(tensorTen);

  textResult.innerHTML += `\nPrimeiro array${tensorOne}\n`;
  textResult.innerHTML += `\nSegundo array${tensorTwo}\n`;
  textResult.innerHTML += `ResultSum =>\n${resultSum}\n`;
  textResult.innerHTML += `ResultSub =>\n${resultSub}\n`;
  textResult.innerHTML += `ResultMul =>\n${resultMul}\n`;
  textResult.innerHTML += `ResultDiv =>\n${resultDiv}\n`;
  textResult.innerHTML += `ResultFloorDiv =>\n${resultFloorDiv}\n`;
  textResult.innerHTML += `\nPrimeiro array${tensorOne}\n`;
  textResult.innerHTML += `\nSegundo array${tensorTwo}\n`;
  textResult.innerHTML += `\nTerceiro array =>\n${tensorThree}\n`;
  textResult.innerHTML += `ResultAddN =>\n${tensorAddN}\n`;
  textResult.innerHTML += `ResultMaximum =>\n${tensorMaximum}\n`;
  textResult.innerHTML += `ResultMinimum =>\n${tensorMinimum}\n`;
  textResult.innerHTML += `\nPrimeiro array${tensorFive}\n`;
  textResult.innerHTML += `\nSegundo array${tensorSix}\n`;
  textResult.innerHTML += `ResultMod =>\n${resultMod}\n`;
  textResult.innerHTML += `\nPrimeiro array${tensorSeven}\n`;
  textResult.innerHTML += `\nSegundo array${tensorEight}\n`;
  textResult.innerHTML += `ResultPow =>\n${resultPow}\n`;
  textResult.innerHTML += `\nPrimeiro array${tensorNine}\n`;
  textResult.innerHTML += `\nSegundo array${tensorTen}\n`;
  textResult.innerHTML += `ResultSquareDifference =>\n${resultSquareDifference}\n`;
}
