let carros = [
    {
        marca: "Rolls Royce",
        modelo: "Silver Coupe",
        km: 20000,
        ano: 1952,
        preco: 900000,
        estado: "Disponivel"
    },
    {
        marca: "Renault",
        modelo: "Gordini",
        km: 250000,
        ano: 1967,
        preco: 400000,
        estado: "Reservado"
    },
    {
        marca: "Ford",
        modelo: "Mustang March",
        km: 20000,
        ano: 1969,
        preco: 680000,
        estado: "Vendido"
    },
    {
        marca: "Land Rover",
        modelo: "Defender",
        km: 60000,
        ano: 1989,
        preco: 220000,
        estado: "Reservado"
    },
    {
        marca: "BMW",
        modelo: "M3",
        km: 120000,
        ano: 1996,
        preco: 350000,
        estado: "Reservado"
    },
    {
        marca: "Porche",
        modelo: "911",
        km: 105000,
        ano: 1980,
        preco: 320000,
        estado: "Reservado"
    },
    {
        marca: "Volvo",
        modelo: "122",
        km: 220000,
        ano: 1989,
        preco: 460000,
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

    modelo.innerHTML = carros[index].modelo;
    marca.innerHTML = carros[index].marca;
    km.innerHTML = carros[index].km;
    ano.innerHTML = carros[index].ano;
    preco.innerHTML = carros[index].preco;
    estado.innerHTML = carros[index].estado;

}

function fecharModalCarro() {
    const modal = document.getElementById("modal-carro");
    modal.style.display = "none";
}

