let textResult = document.querySelector("#result");

//https://www.tensorflow.org/guide/tensor
//https://js.tensorflow.org/api/latest/#tensor4d
function execute() {
  const escalar = tf.scalar(1.5);
  const tensor1d = tf.tensor1d([1, 2, 3]);
  //2 rows, 2 columns
  //se reparar nosso tensor em cada array possui dois valores
  //então por isso o shape e 2 x 2
  const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
  //2 rows, 2 columns and 1 element in each
  //sao 4 elementos porque meu shape e  duas linhas e duas colunas
  const tensor3d = tf.tensor3d([2, 3, 1, 3], [2, 2, 1]);
  const tensor4d = tf.tensor4d([2, 3, 1, 3], [2, 2, 1, 1]);
  const tensor5d = tf.tensor5d([2, 3, 1, 3, 3, 2, 6, 7], [1, 2, 2, 2, 1]);
  const tensor6d = tf.tensor6d([2, 3, 1, 3, 3, 2, 6, 7], [1, 2, 2, 2, 1, 1]);

  textResult.innerHTML = `escalar =>${escalar.toString()}\n`;
  textResult.innerHTML += `1d =>${tensor1d.toString()}\n`;
  textResult.innerHTML += `2d=>${tensor2d.toString()}\n`;
  textResult.innerHTML += `3d=>${tensor3d.toString()}\n`;
  textResult.innerHTML += `4d=>${tensor4d.toString()}\n`;
  textResult.innerHTML += `5d=>${tensor5d.toString()}\n`;
  textResult.innerHTML += `6d=>${tensor6d.toString()}\n`;
}
