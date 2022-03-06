const text = document.querySelector("#result");

function execute() {
  const tensor1d = tf.tensor([3]);
  const asScalar = tensor1d.asScalar();

  const tensor2d = tf.tensor([1, 2, 3, 5], [2, 2]);
  const flatten = tensor2d.flatten();
  const as1D = tensor2d.as1D();

  const tensor3d = tf.tensor([1, 2, 3, 5], [1, 2, 2, 1]);
  //precisa da dimensionalidade
  const as2D = tensor3d.as2D(2, 2);

  const tensor4d = tf.tensor([1, 2, 3, 5]);
  //posso fazer o caminho inverso da menor para a maior
  const as3D = tensor4d.as3D(2, 2, 1);
  //posso fazer o caminho inverso da menor para a maior
  const as4d = tensor4d.as4D(1, 2, 2, 1);
  //posso fazer o caminho inverso da menor para a maior
  const tensor16d = tf.tensor([1, 2, 3, 5, 3, 5, 6, 3]);
  const as5D = tensor16d.as5D(1, 2, 2, 2, 1);

  const tensorFloat = tf.tensor([1.3, 2.1, 3.3, 5.6, 3.5, 5.1, 6.45, 3.2]);
  const asTypeInt = tensorFloat.asType("int32");

  text.innerHTML += `Antes do asScalar \n`;
  text.innerHTML += `${tensor1d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += asScalar;
  text.innerHTML += `\n\nAntes do flatten \n`;
  text.innerHTML += `${tensor2d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += flatten;
  text.innerHTML += `\n\nAntes do as1D \n`;
  text.innerHTML += `${tensor2d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += as1D;
  text.innerHTML += `\n\nAntes do as2D \n`;
  text.innerHTML += `${tensor3d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += as2D;
  text.innerHTML += `\n\nAntes do as3D \n`;
  text.innerHTML += `${tensor4d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += as3D;
  text.innerHTML += `\n\nAntes do as4d \n`;
  text.innerHTML += `${tensor4d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += as4d;
  text.innerHTML += `\n\nAntes do as5d \n`;
  text.innerHTML += `${tensor16d}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += as5D;
  text.innerHTML += `\n\nAntes do asType \n`;
  text.innerHTML += `${tensorFloat}`;
  text.innerHTML += `\n\nDepois \n`;
  text.innerHTML += asTypeInt;
}
