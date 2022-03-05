const text = document.querySelector("#result");

function execute() {
  //função fill constrói nossos tensor
  //neste exemplo abaixo seria fazer  tf.tensor([0])
  //fill primeiro parâmetro e a dimensionalidade depois valor
  const fill0 = tf.fill([1], 0);

  //ts.tensor([0,0], [2,2])
  const fill1 = tf.fill([2, 2], 0);
  const fill2 = tf.fill([2, 2], 1);

  text.innerHTML += `fill:\n${fill0}`;
  text.innerHTML += `\nfill:\n${fill1}`;
  text.innerHTML += `\nfill:\n${fill2}`;
}
