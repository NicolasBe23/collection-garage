// Função para exibir os carros na página
function exibirCarros() {
    let listaCarros = document.getElementById("listaCarros");

    // Limpar a lista antes de adicionar os novos elementos
    listaCarros.innerHTML = "";

    // Iterar sobre o array de veículos
    carros.forEach(function(carro) {
        // Criar um elemento li para cada carro
        let li = document.createElement("li");

        // Preencher o conteúdo do li com as informações do carro
        li.innerHTML = `<strong>Marca:</strong> ${carro.marca}<br>
                        <strong>Modelo:</strong> ${carro.modelo}<br>
                        <strong>KM:</strong> ${carro.km}<br>
                        <strong>Ano:</strong> ${carro.ano}<br>
                        <strong>Preço:</strong> $${carro.preco}<br>
                        <strong>Estado:</strong> ${carro.estado}<br>`;

        // Adicionar o li à lista
        listaCarros.appendChild(li);
    });
}

// Chamar a função para exibir os carros na inicialização da página
exibirCarros();
