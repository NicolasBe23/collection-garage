let carros = [
    {
        marca: "Rolls Royce",
        modelo: "Silver Coupe",
        km: 20000,
        ano: 1952,
        preco: 900000,
        pagina: "rolls-royce.html",
        estado: "Disponivel"
    },
    {
        marca: "Renault",
        modelo: "Gordini",
        km: 250000,
        ano: 1967,
        preco: 400000,
        pagina: "renault-gordini.html",
        estado: "Reservado"
    },
    {
        marca: "Ford",
        modelo: "Mustang March",
        km: 20000,
        ano: 1969,
        preco: 680000,
        pagina: "ford-mustang.html",
        estado: "Vendido"
    },
    {
        marca: "Land Rover",
        modelo: "Defender",
        km: 60000,
        ano: 1989,
        preco: 220000,
        pagina: "land-rover.html",
        estado: "Reservado"
    },
    {
        marca: "BMW",
        modelo: "M3",
        km: 120000,
        ano: 1996,
        preco: 350000,
        pagina: "BMW-m3.html",
        estado: "Reservado"
    },
    {
        marca: "Chevrolet",
        modelo: "Chevelle",
        km: 109000,
        ano: 1970,
        preco: 800000,
        pagina: "chevrolet-chevelle.html",
        estado: "Reservado"
    },
    {
        marca: "Porche",
        modelo: "911",
        km: 105000,
        ano: 1980,
        preco: 320000,
        pagina: "porsche-911.html",
        estado: "Reservado"
    },
    {
        marca: "Volvo",
        modelo: "122",
        km: 220000,
        ano: 1989,
        preco: 460000,
        pagina: "volvo-122.html",
        estado: "Vendido"
    },
]

function onClick(index) {
    const modal = document.getElementById("modal-carro");
    modal.style.display = "flex";

    const modelo = document.getElementById("modelo");
    const marca = document.getElementById("marca");
    const km = document.getElementById("km");
    const ano = document.getElementById("ano");
    const preco = document.getElementById("preco");
    const estado = document.getElementById("estado");
    const botaoReservar = document.getElementById("reservar-button-link");

    modelo.innerHTML = carros[index].modelo;
    marca.innerHTML = carros[index].marca;
    km.innerHTML = carros[index].km;
    ano.innerHTML = carros[index].ano;
    preco.innerHTML = carros[index].preco;
    estado.innerHTML = carros[index].estado;
    botaoReservar.href = carros[index].pagina;
}

function fecharModalCarro() {
    const modal = document.getElementById("modal-carro");
    modal.style.display = "none";
}

function reservar() {
    var botao = document.getElementById("botaoReserva");
  if (botao.innerHTML === "Reservar") {
   
    botao.innerHTML = "Reservado";
  } else {
    
    console.log("O botão já está reservado.");
  }
}