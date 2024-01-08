window.addEventListener("load", function () {
	const urlParams = new URLSearchParams(window.location.search);
	const index = urlParams.get('index');

	if(
		!index
		|| isNaN(index)
		|| index < 0
		|| index > carros.length - 1
		) {
		window.location.href = "index.html";
	}


	const titulo = document.getElementById("titulo");
	const marca = document.getElementById("marca");
	const modelo = document.getElementById("modelo");
	const km = document.getElementById("km");
	const ano = document.getElementById("ano");
	const preco = document.getElementById("preco");
	const imagem = document.getElementById("imagem");
	const botaoReservar = document.getElementById("botao-reservar");

	titulo.innerHTML = carros[index].marca + " " + carros[index].modelo;
	marca.innerHTML = 'marca: ' + carros[index].marca;
	modelo.innerHTML = 'modelo: ' + carros[index].modelo;
	km.innerHTML = 'km: ' + carros[index].km;
	ano.innerHTML = 'ano: ' + carros[index].ano;
	preco.innerHTML = carros[index].preco + '€';
	imagem.src = carros[index].imagem;
	imagem.alt = carros[index].modelo;

	if (carros[index].estado === "Vendido") {
		botaoReservar.disabled = true;
		botaoReservar.innerHTML = "Vendido";
	}

	if (carros[index].estado === "Reservado") {
		botaoReservar.disabled = true;
		botaoReservar.innerHTML = "Reservado";
	}

	botaoReservar.addEventListener("click", function () {
		carros[index].estado = "Reservado";
		botaoReservar.disabled = true;
		botaoReservar.innerHTML = "Reservado";

		localStorage.setItem('carros', JSON.stringify(carros));
	});
});