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


const configurarFiltros = () => {
    document.querySelectorAll(".filter-btn").forEach(botao => {
        botao.addEventListener("click", function() {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            exibirGatos(this.dataset.raca);
        });
    });
};


window.onload = () => {
    exibirGatos('all'); 
    configurarFiltros(); 
};
