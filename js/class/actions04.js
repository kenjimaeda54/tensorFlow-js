const text = document.querySelector("#result");

function execute() {
  const dataTensor = tf.tensor([3, 2, 4, 5]);
  const dataTensor2d = tf.tensor([
    [1, 2],
    [3, 4],
  ]);
  //no dataSync ele vai retornar um array
  //nao importando com a dimensionalidades
  const dataScalar = tf.scalar(2);
  const dataTransform = dataTensor.dataSync();
  const dataTransform2d = dataTensor2d.dataSync();
  const dataTransformScalar = dataScalar.dataSync();

  //arraySync vai respeitar as dimensionalidades
  const arrayTensor = tf.tensor([3, 2, 4, 5]);
  const arrayTensor2d = tf.tensor([
    [1, 2],
    [3, 4],
  ]);
  const arrayScalar = tf.scalar(2);
  const arrayTransform = arrayTensor.arraySync();
  const arrayTransform2d = arrayTensor2d.arraySync();
  const arrayTransformScalar = arrayScalar.arraySync();

  //para o javascript e um array,ja que sera transformado
  //em string, colocamos os []
  text.innerHTML += `Antes do dataSync \n`;
  text.innerHTML += `${dataTensor.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `[${dataTransform}]\n`;
  text.innerHTML += `\n\nAntes do dataSync \n`;
  text.innerHTML += `${dataTensor2d.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `[${dataTransform2d}]\n`;
  text.innerHTML += `\n\nAntes do dataSync \n`;
  text.innerHTML += `${dataScalar.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `[${dataTransformScalar}]\n`;
  text.innerHTML += `\n\nAntes do arraySync \n`;
  text.innerHTML += `${arrayTensor.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `${JSON.stringify(arrayTransform)} \n`;
  text.innerHTML += `\n\nAntes do arraySync \n`;
  text.innerHTML += `${arrayTensor2d.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `${JSON.stringify(arrayTransform2d)} \n`;
  text.innerHTML += `\n\nAntes do arraySync \n`;
  text.innerHTML += `${arrayScalar.toString()} \n`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += `${JSON.stringify(arrayTransformScalar)} \n`;
}
