
# <h1 align="center">POC 2 - Array </h1>

## Sumário
* [Objetivo](#objetivo)
*  [O que é?](#oque)
* [Características do Flexbox](#caracteristicas)
   * [filter](#filter)
   * [map](#map)
   * [sort](#sort)
   * [reduce](#reduce)
   * [spread](#spread)
* [Autoras](#autoras)


<div id='objetivo'/> 
   
## Objetivo 
<p> Esta Prova de Conceito tem como objetivo demonstrar a eficácia e a flexibilidade dos métodos de manipulação de arrays em JavaScript, como sort, map, filter, reduce, e o operador spread. Através da implementação prática desses métodos, buscamos ilustrar como realizar operações como ordenação, transformação e filtragem de dados de maneira eficiente e clara..</p>



<div id='oque'/> 
  
## O que é? 
  No JavaScript, um `array` é uma estrutura de dados que permite armazenar múltiplos valores sob um único nome de variável. Esses valores são organizados de forma ordenada e acessíveis por meio de índices numéricos, começando do zero. `Arrays` são muito úteis para gerenciar coleções de dados e realizar operações como iteração, filtragem e transformação de elementos. Além disso, os `arrays` em JavaScript são dinâmicos, o que significa que podem crescer e diminuir de tamanho conforme necessário, e oferecem uma ampla gama de métodos integrados para manipulação e processamento dos dados que contêm. 


<div id='caracteristicas'/>

## Características do Array


<div id='filter'/>
   
### Filter



<div id='sort'/>
   
### Sort
  O método `sort()` serve para ordenar os elementos de um array. Ele altera o array original, organizando seus itens em ordem alfabética ou numérica. No entanto, por padrão, a ordenação é feita como se os valores fossem strings, o que pode gerar resultados incorretos ao trabalhar com números.
  
  Veja esse exemplo de orgazinação de gatos pela sua idade: 

  Observe o código javascript:
```js
const exibirGatosOrdenados = () => {
    var listaGatinhosCopy= listaGatinhos.slice() 
    listaGatinhosCopy.sort((a,b) => a.idade - b.idade )

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
```
**1- Criação de Cópia do Array:**
  * `listaGatinhos.slice()` cria uma cópia do array original listaGatinhos. Isso é feito para evitar a alteração do array original durante a ordenação. 

**2-Ordenação do Array:**
  * O método `sort` é utilizado para ordenar o array listaGatinhosCopy com base na idade dos gatos. 
  * A função de comparação `(a, b) => a.idade - b.idade` garante que os gatos sejam ordenados em ordem crescente de idade.

**3-Mapeamento para HTML:**
  * O método `map` é usado para transformar cada objeto gato em uma string HTML formatada


**4-Atualização do Conteúdo HTML:**
  * O método join("") combina todas as strings HTML geradas pelo map em uma única string.
  * Então, essa string é definida como o conteúdo HTML do elemento `sectionSort`, atualizando a visualização da página com os cards ordenados.

  
**5-Resultado Final:**
    ![image](https://github.com/user-attachments/assets/4c203357-6ca7-4f1f-9799-d48d10c7321c)
    ![image](https://github.com/user-attachments/assets/9136d263-3e09-4e2c-96e3-d0ffd3bcb55f)








<div id='map'/>
   
### Map

O método map() em JavaScript cria um novo array transformando cada item do array original com uma função. Ele não muda o array original e evita o uso de loops para fazer essas transformações
##Como Faz:
Array Original: `Gatos` contém uma lista de objetos com informações sobre  nome, tipo de ração e tipo de sache.
     
``` javascript
const gatos = [
    { nome: 'branco', ração: 'Ração Premium', sachê: 'Sachê de Atum', imagem: 'imagens/branco.png' },
    { nome: 'Calico', ração: 'Ração Standard', sachê: 'Sachê de Frango', imagem: 'imagens/calico.png' },
    { nome: 'Marrom', ração: 'Ração Super Premium', sachê: 'Sachê de Carne', imagem: 'imagens/marrom.png' },
    { nome: 'cinza', ração: 'Ração Hipoalergênica', sachê: 'Sachê de Salmão', imagem: 'imagens/cinza.png' },
    { nome: 'laranja', ração: 'Ração Gourmet', sachê: 'Sachê de Peru', imagem: 'imagens/laranja.png' }
];
```
Usamos document.getElementById('galeria') para selecionar o elemento HTML onde os cards serão inseridos.

``` javascript
const galeria = document.getElementById('galeria');
```
Usando a função map() retorna uma nova versão de cada item do array original, de acordo com as transformações que você aplicar na função, para cada item no array, criamos um card com a imagem do gato, o nome, o tipo de ração e o  tipo de sachê.    
 ```javascript
gatos.map(gato => {
    const divGato = document.createElement('div');
    divGato.className = 'card';

    const img = document.createElement('img');
    img.src = gato.imagem;
    img.alt = `Nome do gato: ${gato.nome}`;
    img.className = 'card-img';

    const h1 = document.createElement('h1');
    h1.textContent = gato.nome;

    const pRacao = document.createElement('p');
    pRacao.textContent = `Tipo de Ração: ${gato.ração}`;

    const pSache = document.createElement('p');
    pSache.textContent = `Tipo de Sachê: ${gato.sachê}`;
```
Por fim, os elementos são organizados dentro de uma `div` e inseridos no elemento com o ID galeria.
 ```javascript
    const divContent = document.createElement('div');
    divContent.className = 'card-content';
    divContent.appendChild(h1);
    divContent.appendChild(pRacao);
    divContent.appendChild(pSache);

    divGato.appendChild(img);
    divGato.appendChild(divContent);

    galeria.appendChild(divGato);
```
![Captura de tela 2024-09-10 111526](https://github.com/user-attachments/assets/e0cc465e-2a36-4525-8c7c-aca4af762506)




<div id='reduce'/>
   
### Reduce
  O método `reduce()` aplica uma função acumuladora a cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor.



<div id='spread'/>
   
### Spread
  O operador de `spread (...)` permite expandir elementos de arrays ou objetos iteráveis em lugares onde múltiplos elementos ou argumentos são esperados.



<div id='autoras'/>
   
## Autoras:
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos 



