// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Atualiza a exibição da lista
    atualizarLista();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo à lista como um <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear amigo secreto corretamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos antes de sortear.");
        return;
    }

    // Copia a lista original para evitar modificações diretas
    let sorteio = [...amigos];
    let resultadoFinal = {};

    // Embaralha a lista para garantir aleatoriedade
    sorteio = sorteio.sort(() => Math.random() - 0.5);

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let sorteado = sorteio[i];

        // Garante que a pessoa não tire a si mesma
        if (amigo === sorteado) {
            sortearAmigo(); // Se acontecer, refaz o sorteio
            return;
        }

        resultadoFinal[amigo] = sorteado;
    }

    // Exibe o resultado na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h3>Resultado do Sorteio:</h3>";
    for (let [amigo, sorteado] of Object.entries(resultadoFinal)) {
        resultado.innerHTML += `<p><strong>${amigo}</strong> tirou <strong>${sorteado}</strong></p>`;
    }
}