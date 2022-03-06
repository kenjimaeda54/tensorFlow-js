const text = document.querySelector("#result");

function execute() {
  const tensorDispose = tf.tensor([3, 2, 4, 5]);
  //dispose é para liberar a memoria
  tensorDispose.dispose();
  //vai acusar erro porque a variável foi liberada
  // tensorDispose.print();
  const tensor2d = tf.tensor([true, false, true, false], [2, 2]);
  const toFloat = tensor2d.toFloat();
  const tensorInt = tf.tensor([1.3, 2.4, 3.1, 4.2], [2, 2]);
  const toInt = tensorInt.toInt();
  const tensorBool = tf.tensor([1, 0, 1, 0], [2, 2]);
  const toBool = tensorBool.toBool();

  //ele nao consegue converter caso possuir valores impares dentro.
  //Exemplo um array de 5 valores, porque desejo converter para shape 2 x 2
  const tensorStr = tf.tensor([2, 3, 4, 5]);
  //ele converte  a dimensionalidade para qual colocarmos no reshape
  const reshape = tensorStr.reshape([2, 2]);
  //reshapeAs ele muda a dimensionalidade de acordo com um tensor
  //estamos mudando o tensorStr2 para dimensionalidade do tensorStr3
  //os valores internos serão do tensorStr2
  const tensorStr2 = tf.tensor([
    [2, 3],
    [4, 5],
  ]);

  //ele nao consegue converter caso possuir valores impares dentro.
  //Exemplo um array de 5 valores, porque desejo converter para shape 2 x 2
  const tensorStr3 = tf.tensor([2, 3, 4, 5]);
  const reshapeAs = tensorStr2.reshapeAs(tensorStr3);

  text.innerHTML += `Antes do toFloat \n`;
  text.innerHTML += `${tensor2d.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += toFloat.toString();
  text.innerHTML += `\n\nAntes do toInt \n`;
  text.innerHTML += `${tensorInt.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += toInt.toString();
  text.innerHTML += `\n\nAntes do toBool \n`;
  text.innerHTML += `${tensorBool.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += toBool.toString();
  text.innerHTML += `\n\nAntes do reshape \n`;
  text.innerHTML += `${tensorStr.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += reshape.toString();
  text.innerHTML += `\n\nAntes do reshapeAs \n`;
  text.innerHTML += `${tensorStr2.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += reshapeAs.toString();
}
