function atualizarUltimoAtendimento(){
    const ultimo = localStorage.getItem('ultimoAtendido'); //Busca no navegador um valor salvo com a chave 'ultimoAtendido'
    if (ultimo) {//Verifica se existe algum valor salvo
        document.getElementById('ultimoAtendimento').textContent = ultimo; //Pega um elemento do HTML com esse ID
    }
}

// Chamar no corpo do script 
atualizarUltimoAtendimento(); //Atualiza o texto exibido na tela com o valor do localStorage

// Definir o refresh a cada 1000ms 
setInterval(atualizarUltimoAtendimento,1000);

