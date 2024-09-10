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

// Map
const gatos = [
    { nome: 'branco', ração: 'Ração Premium', sachê: 'Sachê de Atum', imagem: 'imagens/branco.png' },
    { nome: 'Calico', ração: 'Ração Standard', sachê: 'Sachê de Frango', imagem: 'imagens/calico.png' },
    { nome: 'Marrom', ração: 'Ração Super Premium', sachê: 'Sachê de Carne', imagem: 'imagens/marrom.png' },
    { nome: 'cinza', ração: 'Ração Hipoalergênica', sachê: 'Sachê de Salmão', imagem: 'imagens/cinza.png' },
    { nome: 'laranja', ração: 'Ração Gourmet', sachê: 'Sachê de Peru', imagem: 'imagens/laranja.png' }
];

const galeria = document.getElementById('galeria');

gatos.map(gato => {
    const divGato = document.createElement('div');
    divGato.className = 'card';

    const img = document.createElement('img');
    img.src = gato.imagem;
    img.alt = `Gato da raça ${gato.nome}`;
    img.className = 'card-img';

    const h1 = document.createElement('h1');
    h1.textContent = gato.nome;

    const pRacao = document.createElement('p');
    pRacao.textContent = `Tipo de Ração: ${gato.ração}`;

    const pSache = document.createElement('p');
    pSache.textContent = `Tipo de Sachê: ${gato.sachê}`;


    const divContent = document.createElement('div');
    divContent.className = 'card-content';
    divContent.appendChild(h1);
    divContent.appendChild(pRacao);
    divContent.appendChild(pSache);

    divGato.appendChild(img);
    divGato.appendChild(divContent);

    galeria.appendChild(divGato);
});

