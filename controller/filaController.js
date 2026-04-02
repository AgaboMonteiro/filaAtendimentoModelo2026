//arquivo de sript começa com letra minuscula

const minhaFila = new Fila(5);

function adicionarElemento() {//interação direta com o html, por isso tem o function, na classe não tem pois não existe essa interação
  const nome = document.getElementById("txtnovoNome");//colocando o nome no novoElemento
  const cpf = document.getElementById("txtnovoCpf");//ADD CPF

  const data = obterDataAtual();
  const hora = obterHoraAtual();

  const novoAtendimento = new Atendimento(nome.value,cpf.value,data,hora);

  if (minhaFila.enqueue(novoAtendimento)) {//se deu certo de inserir
    mostrarFila(); //mostrar fila
    nome.value = ""; 
    nome.focus(); //clar imput
    cpf.value = "";
  } else {
    alert("Fila cheia!");
  }
}


  function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    //filaElemento.textContent = minhaFila.toString();
    filaElemento.innerHTML="";
    for (let item of minhaFila) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    // AGORA MOSTRA OBJETO COMPLETO
    li.textContent = item.toString();

    filaElemento.appendChild(li);
  }
}


    /*for(let item of minhaFila){
      const listItem = document.createElement("li"); // para cada elemento da minha fila crio um li
      listItem.textContent = item; // coloca o elementp da fila
      filaElemento.appendChild(listItem); // e pega o lista item e faz parte do ul
    }
  }*/


  function removerElemento(){
    let removido = minhaFila.dequeue();
    if(removido===null)
      alert("FILA VAZIA");
    else {
      alert("ATENDIDO "+removido);
      mostrarFila(); //retirar aqui


    }
  }

  function buscarElemento(){
    //pegar valor input
    const buscarElemento = document.getElementById("txtnovoCpf");
    let encontrado = false;
    let cont = 0;
    for(let item of minhaFila){
      cont ++;
      if(buscarElemento.value === item.cpf){
          alert("Encontrado na fila na posição"+ cont);
          encontrado = true;
        }
      
    }
    if(!encontrado)
      alert ("Não encontrado na fila");

  }// fim busca

  //nome
  //cpf
  //data e hora
  

