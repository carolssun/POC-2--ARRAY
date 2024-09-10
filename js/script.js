// MAP
// Array
const gatos = [
    { nome: 'branco', ração: 'Ração Premium', sachê: 'Sachê de Atum', imagem: 'imagens/branco.png' },
    { nome: 'Calico', ração: 'Ração Standard', sachê: 'Sachê de Frango', imagem: 'imagens/calico.png' },
    { nome: 'Marrom', ração: 'Ração Super Premium', sachê: 'Sachê de Carne', imagem: 'imagens/marrom.png' },
    { nome: 'cinza', ração: 'Ração Hipoalergênica', sachê: 'Sachê de Salmão', imagem: 'imagens/cinza.png' },
    { nome: 'laranja', ração: 'Ração Gourmet', sachê: 'Sachê de Peru', imagem: 'imagens/laranja.png' }
];

const galeria = document.getElementById('galeria');

// MAP
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


//Console
    const divContent = document.createElement('div');
    divContent.className = 'card-content';
    divContent.appendChild(h1);
    divContent.appendChild(pRacao);
    divContent.appendChild(pSache);

    divGato.appendChild(img);
    divGato.appendChild(divContent);

    galeria.appendChild(divGato);
});
