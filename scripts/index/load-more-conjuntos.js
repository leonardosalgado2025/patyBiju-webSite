// Variáveis Pop-up Image:
const imageContainer = document.querySelectorAll('.item-container img');
const popup = document.querySelector('.popup-image');
const popImage = document.querySelector('.popup-image img');
const close = document.querySelector('#close');
const backTop = document.querySelector('#back-top-btn');
const nomeArtigo = document.querySelector('.nome-artigo-pop');
const descArtigo = document.querySelector('.desc-artigo-pop');
const precoArtigo = document.querySelector('.preco-artigo-pop');
const corArtigo = document.querySelector('.corItem div');
const corContainer = document.querySelector('#cor-container');
const btnAnterior = document.querySelector('#nav-pop-before');
const btnSeguinte = document.querySelector('#nav-pop-next');


// Variáveis Carregar Imagens:
const container = document.querySelector('#load-container');
let itemsPerPage = 4; // Número de itens por página (Tem de ser acurate)
let currentPage = 1;  // Página inicial


// Artigos (objetos):
const itemsData = [

    /* [bccb00001] - Gold / Fino */
    {image: 'https://drive.google.com/uc?export=view&id=1KJ0M6AiwCbPbLA0vZXbnTBdINK9CU4yb', name: ' Primavera Gold', description: 'Conjunto em aço de pétalas de orquídea composto por um colar com fio fino e leve e um par de brincos suaves. Demonstra uma sensação de leveza e primaveril.', price: '€5,50', colors: ['gold'], multipleColors:'false'},


    {image: 'https://drive.google.com/uc?export=view&id=1i3OKMaPk8ynbYaIF7PwCnGvs03q0UKWc', description: 'Corações', price: '€5,50', colors: ['silver', 'gold'], multipleColors:'true', imagemgold: 'https://drive.google.com/uc?export=view&id=https:113HRRQ4jVsvJXvVlGX8dOOjdO4DUznEs'},

    {image: 'images/items/conjunto-dourado-teste.png', description: 'Douro Vivante', price: '€4,20', colors: ['gold', 'silver'] },

    {image: 'images/items/pulseira-colorida-teste.jpg', description: 'Rainbow and Flowers', price: '€3,70', colors: ['silver'] }
    // Adicionar mais objetos conforme necessário
];

// Número total de items na secção "Conjuntos-colar-brincos"
let totalArtigos = itemsData.length;


// Pop-up image:
let itemAtualPopUp = 0;

// _Função adcionar cores
 function addColor(colors){

    // __limpar conteúdo anterior
    corContainer.innerHTML = '';

    // __adiconar as cores
    colors.forEach(color =>{
        const corBtn = document.createElement('button');
        corBtn.className = `cor-artigo-${color}`
        corBtn.classList.add('botao-cor')
        corBtn.id = `id-cor-${color}`
        corContainer.appendChild(corBtn)
    });
}

// _Exibir o artigo na janela pop-up com base no indice:
function exibirArtigoPopUp(index){
    nomeArtigo.textContent = itemsData[index].name;
    descArtigo.textContent = itemsData[index].description;
    precoArtigo.textContent = itemsData[index].price
    popImage.src = itemsData[index].image;

    // _adicionar cor
    addColor(itemsData[index].colors)

    // __Ocultar botões:
    // ___botão anterior
    btnAnterior.style.display = (index === 0) ? 'none' : 'inline-block';
    // ___botão seguninte
    btnSeguinte.style.display = (index == (totalArtigos-1)) ? 'none' : 'inline-block';
}

// _EventListener de click na imagem
container.addEventListener('click', function (event){

    const clickedItem = event.target.closest('.item');
    if (clickedItem) {

        //__obter index da imagem clicada
        const index = clickedItem.dataset.index;
        console.log('Index:',index)

        // __Verificar se o index é válido
        if (index >= 0 && index < totalArtigos){
            // ___exibir o pop-up com bas no indice da imagem clicada
            itemAtualPopUp = index;
            exibirArtigoPopUp(itemAtualPopUp);
        }


        // __Exibir o pop-up
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        backTop.style.visibility = 'hidden';
    }
})

// _Botão fechar pop-up
close.addEventListener('click', ()=>{
    popup.style.display = 'none';
    document.body.style.overflow = '';
    backTop.style.visibility = ''
})


// Nav Artigos:
// _Botão seguinte
btnSeguinte.addEventListener('click', function () {
    if (itemAtualPopUp < itemsData.length - 1) {
        itemAtualPopUp++;
    } else {
        // Voltar ao primeiro item se estiver no último
        itemAtualPopUp = 0;
    }

    exibirArtigoPopUp(itemAtualPopUp);
});

// _Botão anterior
btnAnterior.addEventListener('click', function () {
    if (itemAtualPopUp > 0) {
        itemAtualPopUp--;
    } else {
        // Voltar ao último item se estiver no primeiro
        itemAtualPopUp = itemsData.length - 1;
    }

    if(itemAtualPopUp == 0){
        document.querySelector('#nav-pop-before').style.display = 'none'
    }

    exibirArtigoPopUp(itemAtualPopUp);
});


// Carregar Imagens:
// _event listener para o botão "Carragar Mais"
document.querySelector('#load-btn').addEventListener('click', loadMoreItems)

// _carregar items no load da página
loadMoreItems();

// _Função para criar os elementos necessários
function loadMoreItems() {
    currentPage++; 

    // neste ponto, pede ser feita uma solicitação AJAX para carregar os dados do servidor
    setTimeout(() => {
        
        // __adicionar os novos itens ao "container"
        for (let i = 0; i < itemsPerPage; i++){
                
                // ___criar o artigo "item"
                const newItem = document.createElement('article');
                newItem.className = 'item';
                newItem.dataset.index = i;

                // ___criar div para a imagem
                const imageDiv = document.createElement('div');
                imageDiv.className = 'item-img';
            
                // ___criar imagem
                const newImage = document.createElement('img');
                newImage.src = itemsData[i].image;
                newImage.alt = `Imagem ${i + (currentPage - 1) * itemsPerPage + 1}`;
            
                // ___adicionar imagem à div
                imageDiv.appendChild(newImage);

                // ___adicionar div da imagem ao item
                newItem.appendChild(imageDiv);

                // ___criar div texto
                const textDiv = document.createElement('div');
                textDiv.className = 'item-desc';

                // ___criar titulo
                const newTitle = document.createElement('h4');
                newTitle.textContent = itemsData[i].name;
                textDiv.appendChild(newTitle);

                // ___criar preço
                const newPrice = document.createElement('p');
                newPrice.textContent = itemsData[i].price;
                textDiv.appendChild(newPrice);

                // ___adicionar a textDiv ao newItem
                newItem.appendChild(textDiv);
            
                // ___adiconar todos os elementos criados ao "container"
                container.appendChild(newItem);
        
        }

        // __se não houver mais itens para carregar, ocultar o botão
        if ((currentPage - 1) * itemsPerPage >= itemsData.length) {
            document.getElementById('load-btn').style.display = 'none';
        } 
    }, 500); // tempo de simulação de uma requisição assíncrona (pode ser substituído por uma solicitação real)
}