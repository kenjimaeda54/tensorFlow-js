let textResult = document.querySelector("#result");

function execute() {
  const escalar = tf.scalar(1.5);
  textResult.innerHTML = `escalar =>${escalar.toString()}\n`;
  const tensor1d = tf.tensor1d([1, 2, 3]);
  textResult.innerHTML += `1d =>${tensor1d.toString()}\n`;
  const tensor2d = tf.tensor2d(
    [
      [1, 3],
      [3, 2],
    ],
    //2 rows, 2 columns
    //se reparar nosso tensor em cada array possui dois valores
    //então por isso o shape e 2 x 2
    [2, 2]
  );
  textResult.innerHTML += `2d=>${tensor2d.toString()}\n`;
  //2 rows, 2 columns and 1 element in each
  //sao 4 elementos porque meu shape e  duas linhas e duas colunas
  const tensor3d = tf.tensor3d([2, 3, 1, 3], [2, 2, 1]);
  textResult.innerHTML += `3d=>${tensor3d.toString()}\n`;
}
