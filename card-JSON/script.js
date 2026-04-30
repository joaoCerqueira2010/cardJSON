  function cafe(){

 fetch('card.json')
 .then(response => response.json())
.then(dadinho =>{
 document.getElementById('destino').innerHTML=<div class="card">
      `<div class="card">
      <img src="img/`+dadinho.imagem+`" alt="" >
      <h3>`+dadinho.nome+`</h3>
      <p>`+dadinho.descricao+`</p>
      <a href="`+dadinho.endereco+`">

      
        <button type="button">Adicionar</button>
      </a>
      
    </div>`;
   
       })
    }
