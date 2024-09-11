window.onload = () => {
    exibirGatos('all'); 
    configurarFiltros(); 
    exibirGatosOrdenados();
};
const listaGatinhos = [
    { nome: " Mingau ", idade: 2, foto: "./imagens/branco.png", cor: "branco", raca: "Siamês" },
    { nome: " Whisky ", idade: 9, foto: "./imagens/calico.png", cor: "cálico", raca: "Persa" },
    { nome: " Café ", idade: 6, foto: "./imagens/marrom.png",cor: "marrom", raca: "Não identificada" },
    { nome: " Luna ", idade: 2, foto: "./imagens/cinza.png",cor: "cinza", raca: "Exótico" },
    { nome: " Garfield ", idade: 4, foto: "./imagens/laranja.png",cor: "laranja", raca: "Não identificada" },
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
                    <p>Cor: ${gato.cor}</p>
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


// ---------- MAP ----------

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

// ---------- SORT ----------
const exibirGatosOrdenados = () => {
    var listaGatinhosCopy= listaGatinhos.slice() //gera uma cópia do original 
    listaGatinhosCopy.sort((a,b) => a.idade - b.idade )// ordena pela idade

    const sectionSort = document.getElementById("sort");
        const cardsOrdenados = listaGatinhosCopy.map(gato => `
            <article class="card">
                <img src="${gato.foto}" alt="${gato.nome}" class="card-img"/>
                <div class="card-content">
                    <h1>${gato.nome}</h1>
                    <h2>${gato.idade} anos</h2>
                    <p>Cor: ${gato.cor}</p>
                    <p>Raça: ${gato.raca}</p>
                </div>
            </article>
        `);
        sectionSort.innerHTML = cardsOrdenados.join("");
}
