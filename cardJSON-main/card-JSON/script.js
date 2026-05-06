sync  function cafe(){
const destino = document.getElementById('destino');

  try {


    const response = await fetch('card.json');
  }
  if (!response.ok) throw new Error('falha no carregamento de dados !!')

  const cafes = await response.json();





  cafes.forEach(item => {
    const card = document.createElement('div')
    card.className = 'card';
 card.innerHTML = ´
 <img src="/${item.imagem}" alt="foto de $(item.nome">
 <h3></h3>
 <P></P>
<a   href="img/${item.endereco}">

<button type="button">SAIBA MAIS</button>
</a>
´;
