const text = document.querySelector("#result");

function execute() {
  const tensor = tf.tensor([3, 2, 4, 5]);
  //ele vai adiciona novas dimensões de acordo com o valor passar
  //na pratica sua dimensionalidade nao e levada em consideração
  const expandDims = tensor.expandDims(1);

  const tensor2d = tf.tensor([[1], [2], [3], [4]]);
  //faz o caminho inverso do expandDims
  const squeeze = tensor2d.squeeze(1);

  //adiciona o valor do array com o antecessor a ele
  //vai ficar [3, 5, 9, 14]
  const cumsum = tensor.cumsum();
  //vai clonar o valor para dentro dessa variável
  const tensorClone = tf.tensor([1, 2, 3, 4]);
  const clone = tensorClone.clone();

  text.innerHTML += `Antes do expandDims \n`;
  text.innerHTML += `${tensor.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += expandDims.toString();
  text.innerHTML += `\n\nAntes do squeeze \n`;
  text.innerHTML += `${tensor2d.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += squeeze.toString();
  text.innerHTML += `\n\nAntes do cumsum \n`;
  text.innerHTML += `${tensor.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += cumsum.toString();
  text.innerHTML += `\n\nAntes do clone \n`;
  text.innerHTML += `${tensorClone.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += clone.toString();
}
