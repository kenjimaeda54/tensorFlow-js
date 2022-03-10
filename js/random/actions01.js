let textResult = document.querySelector("#result");

function execute() {
  //vai gerar um numero random entre -3 e 3
  //dimensionalidade e 2 por 2
  const randomNormal = tf.randomNormal([2, 2]);
  //mesma logica que randomNormal diferença e qeu consigo colocar o valor
  //mínimo e máximo do numero gerado
  const randomUniform = tf.randomUniform([2, 2], 1, 10);

  textResult.innerHTML = `RandomNormal =>\n${randomNormal}\n`;
  textResult.innerHTML += `\nRandomUniform   =>\n${randomUniform}\n`;
}
