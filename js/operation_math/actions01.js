let textResult = document.querySelector("#result");

function execute() {
  const tensorOne = tf.tensor([-2, -5, 3]);
  //números negativos vao se tornar positivos
  //ela nao altera o valor do tensor
  const tensorAbs = tensorOne.abs();
  const tensorTwo = tf.tensor([1, -1]);
  //retorna o arco cosseno do valor do tensor
  const tensorArcs = tensorTwo.acos();
  const tensorThree = tf.tensor([1, 2.5]);
  //retorna o arco cosseno hiperbólico do valor do tensor
  const tensorArcosh = tensorThree.acosh();
  const tensorFour = tf.tensor([1, -1]);
  //retorna o arco seno do valor do tensor
  const tensorAsin = tensorFour.asin();
  const tensorFive = tf.tensor([1, -1]);
  //retorna o arco seno hiperbólico do valor do tensor
  const tensorAsinh = tensorFive.asinh();
  const tensorSix = tf.tensor([1, -1]);
  //retorna o arco tangente do valor do tensor
  const tensorAtan = tensorSix.atan();
  //retorna arco tangente coeficiente dos argumentos passados
  const tensorAtan2 = tf.atan2(1, -1);

  const tensorSeven = tf.tensor([1.3, -1.5, 3.5]);
  //arredonda para baixo
  const tensorFloor = tensorSeven.floor();
  //arredonda para cima
  const tensorCeil = tensorSeven.ceil();
  const tensorEight = tf.tensor([1, 2]);
  //retorna cosseno do valor do tensor
  const tensorCos = tensorEight.cos();

  textResult.innerHTML = `Antes do abs =>\n${tensorOne}\n`;
  textResult.innerHTML += `\nDepois do abs =>\n${tensorAbs}\n`;
  textResult.innerHTML += `\nAntes do arcs =>\n${tensorTwo}\n`;
  textResult.innerHTML += `\nDepois do arcs =>\n${tensorArcs}\n`;
  textResult.innerHTML += `\nAntes do arcosh =>\n${tensorThree}\n`;
  textResult.innerHTML += `\nDepois do arcosh =>\n${tensorArcosh}\n`;
  textResult.innerHTML += `\nAntes do asin =>\n${tensorFour}\n`;
  textResult.innerHTML += `\nDepois do asin =>\n${tensorAsin}\n`;
  textResult.innerHTML += `\nAntes do asinh =>\n${tensorFive}\n`;
  textResult.innerHTML += `\nDepois do asinh =>\n${tensorAsinh}\n`;
  textResult.innerHTML += `\nAntes do atan =>\n${tensorSix}\n`;
  textResult.innerHTML += `\nDepois do atan =>\n${tensorAtan}\n`;
  textResult.innerHTML += `\nResultado do atan2 =>\n${tensorAtan2}\n`;
  textResult.innerHTML += `\nTensor Seven =>\n${tensorSeven}\n`;
  textResult.innerHTML += `\nDepois do floor =>\n${tensorFloor}\n`;
  textResult.innerHTML += `\nDepois do ceil =>\n${tensorCeil}\n`;
  textResult.innerHTML += `\nAntes do cos =>\n${tensorEight}\n`;
  textResult.innerHTML += `\nDepois do cos =>\n${tensorCos}\n`;
}
