let textResult = document.querySelector("#result");

// Tensor padrao
// Esta sera a forma convencional,porque assim nao preciso converter
// para realizar operações com o tensor

function execute() {
  const tensorOne = tf.tensor([1, 2, 3, 4]);
  const tensorTwo = tf.tensor([1, 2, 3, 4], [2, 2]);
  const tensorThree = tf.tensor([0, 1, 5, 4], [2, 2]);

  //exite a opcao print
  // vai mostrar no console o valor do tensor
  tensorOne.print();
  tensorTwo.print();
  tensorThree.print();

  textResult.innerHTML += `Tensor padrão  com uma dimensão =>\n${tensorOne.toString()}\n`;
  textResult.innerHTML += `Tensor padrão  com duas dimensões =>\n${tensorTwo.toString()}\n`;
  textResult.innerHTML += `Tensor padrão  com duas dimensões e dimensionalidade =>\n${tensorThree.toString()}\n`;
}
