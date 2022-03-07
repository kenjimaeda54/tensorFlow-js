let textResult = document.querySelector("#result");

function execute() {
  //vai gerar um numero random entre -3 e 3
  //dimensionalidade e 2 por 2
  const random = tf.randomNormal([2, 2]);

  textResult.innerHTML = `Antes do random =>\n${random}\n`;
}
