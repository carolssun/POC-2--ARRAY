const listaGatinhos = [
    { nome: "Mingau", idade: 2, foto: "./imagens/branco.png", cor: "branco", raca: "Siamês", ração: "Ração Premium", sachê: "Sachê de Atum" },
    { nome: "Whisky", idade: 9, foto: "./imagens/calico.png", cor: "cálico", raca: "Persa", ração: "Ração Standard", sachê: "Sachê de Frango" },
    { nome: "Café", idade: 6, foto: "./imagens/marrom.png", cor: "marrom", raca: "Não identificada", ração: "Ração Super Premium", sachê: "Sachê de Carne" },
    { nome: "Luna", idade: 2, foto: "./imagens/cinza.png", cor: "cinza", raca: "Exótico", ração: "Ração Hipoalergênica", sachê: "Sachê de Salmão" },
    { nome: "Garfield", idade: 4, foto: "./imagens/laranja.png", cor: "laranja", raca: "Não identificada", ração: "Ração Gourmet", sachê: "Sachê de Peru" }
];

// ---------- MAP ----------
const galeria = document.getElementById('galeria');

listaGatinhos.map(gato => {
    const divGato = document.createElement('div');
    divGato.className = 'card';

    const img = document.createElement('img');
    img.src = gato.foto;
    img.alt = `Gato da raça ${gato.cor}`;
    img.className = 'card-img';

    const h1 = document.createElement('h1');
    h1.textContent = gato.nome; 

    const pIdade = document.createElement('p');
    pIdade.textContent = `${gato.idade} anos`;

    const pCor = document.createElement('p');
    pCor.textContent = `Cor: ${gato.cor}`;

    const pRacao = document.createElement('p');
    pRacao.textContent = `Tipo de Ração: ${gato.ração}`;

    const pSache = document.createElement('p');
    pSache.textContent = `Tipo de Sachê: ${gato.sachê}`;

    const pRaca = document.createElement('p');
    pRaca.textContent = `Raça: ${gato.raca}`;

    const divContent = document.createElement('div');
    divContent.className = 'card-content';
    divContent.appendChild(h1);
    divContent.appendChild(pIdade);
    divContent.appendChild(pCor);
    divContent.appendChild(pRacao);
    divContent.appendChild(pSache);
    divContent.appendChild(pRaca);

    divGato.appendChild(img);
    divGato.appendChild(divContent);

    galeria.appendChild(divGato);
});

// ---------- SORT ----------
const exibirGatosOrdenados = () => {
    var listaGatinhosCopy = listaGatinhos.slice(); // Gera uma cópia do original 
    listaGatinhosCopy.sort((a, b) => a.idade - b.idade); // Ordena pela idade

    const sectionSort = document.getElementById("sort");
    const cardsOrdenados = listaGatinhosCopy.map(gato => `
        <article class="card">
            <img src="${gato.foto}" alt="${gato.cor}" class="card-img"/>
            <div class="card-content">
                <h1>${gato.nome}</h1>
                <h2>${gato.idade} anos</h2>
                <p>Cor: ${gato.cor}</p>
                <p>Raça: ${gato.raca}</p>
                <p>Tipo de Ração: ${gato.ração}</p>
                <p>Tipo de Sachê: ${gato.sachê}</p>
            </div>
        </article>
    `);
    sectionSort.innerHTML = cardsOrdenados.join("");
}

// ---------- FILTER ----------
function exibirGatosFiltrados() {
    var listaGatinhosFiltrados = listaGatinhos.filter(function(gato) {
        return gato.idade > 2; 
    });

    var sectionFilter = document.getElementById("filter");
    var cardsFiltrados = '';

    for (var i = 0; i < listaGatinhosFiltrados.length; i++) {
        var gato = listaGatinhosFiltrados[i];
        cardsFiltrados += `
            <article class="card">
                <img src="${gato.foto}" alt="${gato.cor}" class="card-img"/>
                <div class="card-content">
                    <h1>${gato.nome}</h1>
                    <h2>${gato.idade} anos</h2>
                    <p>Cor: ${gato.cor}</p>
                    <p>Raça: ${gato.raca}</p>
                    <p>Tipo de Ração: ${gato.ração}</p>
                    <p>Tipo de Sachê: ${gato.sachê}</p>
                </div>
            </article>
        `;
    }

    sectionFilter.innerHTML = cardsFiltrados;
}

// ---------- SPREAD E REDUCE ----------
const exibirGatosGeral = (lista, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpa o conteúdo existente

    // Cria os cards para cada gato na lista
    lista.forEach(gato => {
        const cardGato = `
            <article class="card">
                <img src="${gato.foto}" alt="${gato.nome}" class="card-img"/>
                <div class="card-content">
                    <h1>${gato.nome}</h1>
                    <h2>${gato.idade} anos</h2>
                    <p>Cor: ${gato.cor}</p>
                    <p>Raça: ${gato.raca}</p>
                    <p>Tipo de Ração: ${gato.ração}</p>
                    <p>Tipo de Sachê: ${gato.sachê}</p>
                </div>
            </article>
        `;
        container.innerHTML += cardGato;
    });
};

const idadeGatinhos = listaGatinhos.reduce((accumulator, gato) => {
    return accumulator += gato.idade;
  }, 0)

  document.getElementById("soma-idades").innerText = idadeGatinhos;

const listaGatinhosAux = [
    { nome: "Azula", idade: 5, foto: "./imagens/laranja.png", cor: "laranja", raca: "Munchkin", ração: "Ração Premium", sachê: "Sachê de Atum" },
    { nome: "Panqueca", idade: 1, foto: "./imagens/calico.png", cor: "tricolor", raca: "Maine Coon", ração: "Ração Standard", sachê: "Sachê de Salmão" },
]

const listaGatinhosSpread = [
    { nome: "Azula", idade: 5, foto: "./imagens/laranja.png", cor: "laranja", raca: "Munchkin", ração: "Ração Premium", sachê: "Sachê de Atum" },
    { nome: "Panqueca", idade: 1, foto: "./imagens/calico.png", cor: "tricolor", raca: "Maine Coon", ração: "Ração Standard", sachê: "Sachê de Salmão" },
    ...listaGatinhos
]

window.onload = () => {
    exibirGatosOrdenados();
    exibirGatosFiltrados();
    exibirGatosGeral(listaGatinhos, 'gatinhos-cards');
    exibirGatosGeral(listaGatinhosAux, 'gatinhos-aux-cards');
    exibirGatosGeral(listaGatinhosSpread, 'gatinhos-spread-cards');
};
