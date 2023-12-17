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
let itemsPerPage = 8; // Número de itens por página (Tem de ser acurate)
let currentPage = 1;  // Página inicial
let itemsLoaded = []; // Imagens carregadas
const loadBtn = document.querySelector('#load-btn');


// Artigos (objetos):
const itemsData = [

    { // [sku] - Gold / Fino 
        image: '../../images/items/...', 
        name: 'nome', 
        description: 'descrição', 
        price: '€preço', 
        colors: ['cores'], 
        sku: '',
        urlShopify: ''
    },

];

// Número total de items na secção "Conjuntos-colar-brincos"
let totalArtigos = itemsData.length;


// Pop-up image:
let itemAtualPopUp = 0;


// Função adcionar cores:
 function addColor(colors){

    // __limpar conteúdo anterior
    corContainer.innerHTML = '';

    // __adiconar as cores
    colors.forEach ( color => {
        const corDiv = document.createElement('div');
        corDiv.className = `cor-artigo-${color}`
        corDiv.classList.add('div-cor')
        corContainer.appendChild(corDiv)
    });
}

// Exibir o artigo na janela "pop-up" com base no indice:
function exibirArtigoPopUp ( index ) {

    nomeArtigo.textContent = itemsData[index].name;
    descArtigo.textContent = itemsData[index].description;
    precoArtigo.textContent = itemsData[index].price
    popImage.src = itemsData[index].image;

    // __adicionar cor
    addColor(itemsData[index].colors)

    // __Ocultar botões:
    // ___esconder o botão "anterior" na primeira página
    btnAnterior.style.display = ( index == 0 ) ? 'none' : 'inline-block';

    // ___esconder o botão "seguinte"
    btnSeguinte.style.display = ( index == totalArtigos - 1 ) ? 'none' : 'inline-block';
}


// _Função para criar os elementos necessários
function loadMoreItems () {

    // _calcular o index inicial para carregar novos items
    const startIndex = (currentPage - 1) * itemsPerPage;

    // _calcular o index final para carregar novos items
    const endIndex = startIndex + itemsPerPage;

    // neste ponto, pede ser feita uma solicitação AJAX para carregar os dados do servidor
    setTimeout(() => {
     
    // Verificar se há mais items a serem carregados
    if ( startIndex < totalArtigos ) {
        // __adicionar os novos itens ao "container"
        for ( let i = startIndex; i < endIndex && i < totalArtigos; i++ ){

            // ___Verificar se o item já fo carregado
            if ( !Array.isArray(itemsLoaded) || !itemsLoaded.includes(i) ) {  
                
                // ____marcar o item como carregado
                if ( Array.isArray(itemsLoaded) ) {
                    itemsLoaded.push(i);
                }

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

                // ___adicionar classe caso currentPage > 1
                if ( currentPage >= 2 ) {
                    newItem.classList.add('dinamicImage');
                }
            }
        }
    }
        // __se não houver mais itens para carregar, ocultar o botão
        if ( startIndex + itemsPerPage >= totalArtigos ) {
            document.getElementById('load-btn').style.display = 'none';
        } 

    currentPage++

    }, 500); // tempo de simulação de uma requisição assíncrona (pode ser substituído por uma solicitação real)
}


// _Função para resetar o LoadMoreItems quando o "back-top-btn" for precionado
function removeImagesBackTop () {

    setTimeout ( () => {
        // __Verificar se o item possui a tag "dinamicImage"
        const children = Array.from(container.children);

        children.forEach(item => { 
            if ( item.classList.contains('dinamicImage') ) {
                container.removeChild(item);
            }
        })

        // __atualizar "itesmLoaded"
        const numeroElementosRemover = itemsLoaded.length - itemsPerPage;
        const indexInicial = itemsPerPage ;

        itemsLoaded.splice(indexInicial, numeroElementosRemover);
        currentPage = 2;

        // __exibir "back-top-btn"
        document.querySelector('#load-btn').style.display = 'block';
    }, 600);
}


// _carregar items no load da página
loadMoreItems ();


// Carregar Imagens:
// _event listener para o botão "Carragar Mais"
loadBtn.addEventListener('click', loadMoreItems);


// Image Pop-up:
// EventListener de click na imagem
container.addEventListener('click', function ( event ){

    const clickedItem = event.target.closest('.item');

    if ( clickedItem ) {

        //__obter index da imagem clicada
        const index = clickedItem.dataset.index;

        // __Verificar se o index é válido
        if ( index >= 0 && index < totalArtigos ){

            // ___exibir o pop-up com bas no indice da imagem clicada
            itemAtualPopUp = index;
            exibirArtigoPopUp(itemAtualPopUp);
        }


        // __Exibir o pop-up
        popup.classList.add('showpop');
        document.body.style.overflow = 'hidden';

        // ___ocultar "back-top-btn"
        document.querySelector('#back-top-btn').style.visibility = 'hidden'
    }
})

// _Fechar pop-up
// __Botão fechar
close.addEventListener('click', () => {

    popup.classList.remove('showpop');
    document.body.style.overflow = '';

    // __ativar "back-top-btn"
    // ___ocultar "back-top-btn"
    document.querySelector('#back-top-btn').style.visibility = 'visible';
})

// __Fechar pop-up home
document.querySelector('#home-link').addEventListener('click', () => {

    popup.classList.remove('showpop');
    document.body.style.overflow = '';

    // __ativar "back-top-btn"
    // ___ocultar "back-top-btn"
    document.querySelector('#back-top-btn').style.visibility = 'visible';
})


// _Nav Artigos:
// __botão seguinte
btnSeguinte.addEventListener('click', function () {
    if ( itemAtualPopUp < itemsData.length - 1 ) {
        itemAtualPopUp++;
    } else {
        // Voltar ao primeiro item se estiver no último
        itemAtualPopUp = 0;
    }

    exibirArtigoPopUp(itemAtualPopUp);
});

// __Botão anterior
btnAnterior.addEventListener('click', function () {
    if ( itemAtualPopUp > 0 ) {
        itemAtualPopUp--;
    } else {
        // Voltar ao último item se estiver no primeiro
        itemAtualPopUp = itemsData.length - 1;
    }

    if( itemAtualPopUp == 0 ){
        document.querySelector('#nav-pop-before').style.display = 'none'
    }

    exibirArtigoPopUp(itemAtualPopUp);
});


// _Event Listener para mudar imagem ao clicar na cor
corContainer.addEventListener('click', function(event){
    if ( event.target.tagName === 'DIV' ) {
        // __obter todas as classes da div clicada
        const allClasses = event.target.className.split(' ');

        // __filtrar as classes que começam com 'cor-artigo-'
        const colorClasses = allClasses.filter(className => className.startsWith('cor-artigo-'));

        // __Verificar se há alguma classe de cor
        if (colorClasses.length > 0) {
            // ___obter a classe de cor da div clicada
            const selectedColor = colorClasses[0].split('-')[2];
            console.log('Selected Color:', selectedColor);

            // ___Verificar se o index é válido
            if (itemAtualPopUp !== undefined && itemAtualPopUp >= 0 && itemAtualPopUp < totalArtigos) {
                // ____obter a primeira cor no array de cores do objeto
                const firstColor = itemsData[itemAtualPopUp].colors[0];

                // ____Verificar se a cor clicada é a primeira no array de cores
                const isFirstColor = selectedColor === firstColor;
                if (isFirstColor) {
                    console.log('Reseting to original image...');

                    // _____resetar para a imagem original
                    popImage.src = itemsData[itemAtualPopUp].image;

                } else {
                    // _____construir o nome da característica da imagem correspondente
                    const imageFeature = `image${selectedColor ? selectedColor.toLowerCase() : ''}`;
                    console.log('Image Feature:', imageFeature);

                    // _____Verificar se a cor selecionada se econtra no array
                    if (itemsData[itemAtualPopUp] && imageFeature in itemsData[itemAtualPopUp]) {
                        console.log('Updating image...');
                        
                        // ______atualizar a imagem para a versão de cor correspondente
                        popImage.src = itemsData[itemAtualPopUp][imageFeature];   

                    } else {
                        console.log(`Image feature ${imageFeature} not found in the object. Keepping the current image.`)
                    }
                }
            } else {
                console.log('Invalid index:', itemAtualPopUp);
            }
        } else {
            console.log('Nenhuma classe de cor encontrada na div clicada');
        }
    }
})

// _Remover imagens carregadas dinâmicamente ao precionar o "back-top-btn"
// __envet listener 
document.querySelector('#back-top-btn').addEventListener('click', () => {
    if ( itemsLoaded.length > itemsPerPage ) {
        removeImagesBackTop();
    }
});