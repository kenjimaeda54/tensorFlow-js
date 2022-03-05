let textResult = document.querySelector("#result");

// Tipos de tensores

function execute() {
  // a tipagem e opcional
  const int32 = tf.tensor2d([1, 2, 3, 4], [2, 2], "int32");
  const float32 = tf.tensor2d([1.3, 2.5, 3.1, 4.3], [2, 2], "float32");
  const bool = tf.tensor2d([true, false, true, false], [2, 2], "bool");
  const string = tf.tensor2d(["a", "b", "c", "d"], [2, 2], "string");

  textResult.innerHTML += `Tensor tipo int32=>${int32.toString()}\n`;
  textResult.innerHTML += `Tensor tipo float32=>${float32.toString()}\n`;
  textResult.innerHTML += `Tensor tipo bool=>${bool.toString()}\n`;
  textResult.innerHTML += `Tensor tipo string=>${string.toString()}\n`;
}
