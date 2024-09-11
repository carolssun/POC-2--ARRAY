const listaGatinhos = [
    { nome: "Gato branco", idade: 2, foto: "./imagens/branco.png", raca: "Siamês" },
    { nome: "Gato calico", idade: 9, foto: "./imagens/calico.png", raca: "Persa" },
    { nome: "Gato marrom", idade: 6, foto: "./imagens/marrom.png", raca: "Não identificada" },
    { nome: "Gato cinza", idade: 2, foto: "./imagens/cinza.png", raca: "Exótico" },
    { nome: "Gato laranja", idade: 4, foto: "./imagens/laranja.png", raca: "Não identificada" },
];

const exibirGatos = (racaFiltrada) => {
    const secaoGatos = document.getElementById("filter");
    secaoGatos.innerHTML = ""; 

    
    const gatosFiltrados = listaGatinhos.filter(gato => 
        racaFiltrada === 'all' || gato.raca === racaFiltrada
    );

    
    for (const gato of gatosFiltrados) {
        const cardGato = `
            <article class="card">
                <img src="${gato.foto}" alt="${gato.nome}" class="card-img"/>
                <div class="card-content">
                    <h1>${gato.nome}</h1>
                    <h2>${gato.idade} anos</h2>
                    <p>Raça: ${gato.raca}</p>
                </div>
            </article>
        `;
        secaoGatos.innerHTML += cardGato;
    }
};

const exibirGatosGeral = (lista, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (const gato of lista) {
        const cardGato = `
            <article class="card">
                <img src="${gato.foto}" alt="${gato.nome}" class="card-img"/>
                <div class="card-content">
                    <h1>${gato.nome}</h1>
                    <h2>${gato.idade} anos</h2>
                    <p>Raça: ${gato.raca}</p>
                </div>
            </article>
        `;
        container.innerHTML += cardGato;
    }
};

const configurarFiltros = () => {
    document.querySelectorAll(".filter-btn").forEach(botao => {
        botao.addEventListener("click", function() {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            exibirGatos(this.dataset.raca);
        });
    });
};

// ------- REDUCE -------
// Retorna a soma da idade de todos os gatinhos da lista 
const idadeGatinhos = listaGatinhos.reduce((accumulator, gato) => {
    return accumulator += gato.idade;
  }, 0)

  document.getElementById("soma-idades").innerText = `${idadeGatinhos}`;

  console.log(idadeGatinhos);

// ------- SPREAD -------
// Retona a combinação de duas listas de gatinhos
const listaGatinhosAux = [
    { nome: "Gato laranja", idade: 5, foto: "./imagens/laranja.png", raca: "Munchkin" },
    { nome: "Gato cinza", idade: 1, foto: "./imagens/calico.png", raca: "Maine Coon" },
]

const listaGatinhosSpread = [
    { nome: "Gato laranja", idade: 5, foto: "./imagens/laranja.png", raca: "Munchkin" },
    { nome: "Gato cinza", idade: 1, foto: "./imagens/calico.png", raca: "Maine Coon" },
    ...listaGatinhos
]

console.log(listaGatinhosAux)
console.log(listaGatinhosSpread)

window.onload = () => {
    exibirGatosGeral(listaGatinhos, 'gatinhos-cards');
    exibirGatosGeral(listaGatinhosAux, 'gatinhos-aux-cards');
    exibirGatosGeral(listaGatinhosSpread, 'gatinhos-spread-cards');
    exibirGatos('all'); 
    configurarFiltros(); 
};
