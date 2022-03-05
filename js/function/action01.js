const text = document.querySelector("#result");

function execute() {
  //função fill constrói nossos tensor
  //neste exemplo abaixo seria fazer  tf.tensor([0])
  //fill primeiro parâmetro e a dimensionalidade depois valor
  const fill0 = tf.fill([1], 0);

  //ts.tensor([0,0], [2,2])
  const fill1 = tf.fill([2, 2], 0);
  const fill2 = tf.fill([2, 2], 1);

  const zeroOne = tf.zeros([1]);
  const zeroTwo = tf.zeros([2, 2]);
  //duas linhas e 4 colunas
  //todas com valor 0
  const zeroThree = tf.zeros([2, 4]);

  //mesma idea do zeros porem agora populando com 1
  const oneOne = tf.ones([1]);
  const oneTwo = tf.ones([2, 2]);
  const oneThree = tf.ones([2, 4]);

  //primeiro parâmetro e o inicio
  //segundo parâmetro e o fim
  //terceiro parametro e a quantidade de elementos
  const linspaceOne = tf.linspace(0, 10, 11);
  const linspaceTwo = tf.linspace(1, 10, 10);
  const linspaceThree = tf.linspace(1, 15, 15);

  //range e parecido com o linspace
  //porem posso colocar intervalo,neste caso o intervalo e ultimo parametro
  //range vai somando do inicio ate chegar final
  //1,11,3==> vai ser 4,7,10
  //normalmente o ultimo numero nao é incluido
  const rangeOne = tf.range(0, 11, 2);
  const rangeTwo = tf.range(0, 101, 10);
  const rangeThree = tf.range(1, 11, 3);

  text.innerHTML += `fill:\n${fill0}`;
  text.innerHTML += `\nfill:\n${fill1}`;
  text.innerHTML += `\nfill:\n${fill2}`;

  text.innerHTML += `\nzeroOne:\n${zeroOne}`;
  text.innerHTML += `\nzeroTwo:\n${zeroTwo}`;
  text.innerHTML += `\nzeroThree:\n${zeroThree}`;

  text.innerHTML += `\noneOne:\n${oneOne}`;
  text.innerHTML += `\noneTwo:\n${oneTwo}`;
  text.innerHTML += `\noneThree:\n${oneThree}`;

  text.innerHTML += `\nlinspaceOne:\n${linspaceOne}`;
  text.innerHTML += `\nlinspaceTwo:\n${linspaceTwo}`;
  text.innerHTML += `\nlinspaceThree:\n${linspaceThree}`;

  text.innerHTML += `\nrangeOne:\n${rangeOne}`;
  text.innerHTML += `\nrangeTwo:\n${rangeTwo}`;
  text.innerHTML += `\nrangeThree:\n${rangeThree}`;
}
