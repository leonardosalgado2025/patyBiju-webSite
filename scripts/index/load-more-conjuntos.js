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
let itemsLoaded = [];


// Artigos (objetos):
const itemsData = [

    
    { // [bccb00001] - Gold / Fino 
        image: 'https://images2.imgbox.com/96/f5/GVivjtIN_o.jpg', 
        name: ' Primavera Gold', 
        description: 'Conjunto em aço de pétalas de orquídea composto por um colar com fio fino e leve e um par de brincos suaves. Demonstra uma sensação de leveza e primaveril.', 
        price: '€5,50', 
        colors: ['gold'], 
        itemCode: '[bccb00001]s',
        inStock: true
    },
    
    { // [bccb00002] - Silver-Gold / Fino   
        image: 'https://images2.imgbox.com/b1/c7/9jPkJOhm_o.jpg',
        name: 'Coração Leve',
        description: 'Conjunto em aço de um coração que suporta uma pérola, composto por um colar com fio fino e um par de brincos apaixonados. Demonstra uma sensação de leveza e primaveril.',
        price: '€5,50',
        colors: ['silver', 'gold'],
        itemCode: '[bccb00002]',
        imagegold: 'https://images2.imgbox.com/06/45/IEyHjlAC_o.jpg',
        inStock: true
    },

    { // [bccb00003] - Silver / Grosso
        image: 'https://images2.imgbox.com/24/30/y2PQoeYz_o.jpg', 
        name: 'Bosque Prateado', 
        description: 'Diretamente dos bosques, este conjunto em aço é a combinação perfeita para os amantes de ursos. Composto por um colar com fio grosso e um par de brincos ainda mais fofos.',
        price: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00003]',
        inStock: true
    },

    {  // [bccb00004] - Silver / Fino
        image: 'https://images2.imgbox.com/1d/05/yAzPenBv_o.jpg', 
        name: 'Céu Perolado',
        description: 'Uma fusão entre uma estrela do céu e uma pérula do mar que formam uma aliança pacifica mas destemida. Composto por um colar com fio fino e um par de brincos mais determinados ainda.',
        price: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00004]',
        inStock: true
    },

    { // [bccb00005] - silver / Fino
        image: 'https://images2.imgbox.com/3e/23/gKeFY8si_o.jpg',
        name: 'Silver Swan',
        description: 'Diretamento de um lago distante, diretamente para o seu pescoço. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00005]',
        inStock: true
    },

    {  // [bccb00006] - silver / Fino
        image: 'https://images2.imgbox.com/87/48/JSdRkkvx_o.jpg',
        name: 'Freedom',
        description: 'Livre como uma libelinha a voar com o vento. Composto por um colar com fio fino e um par de brincos mais determinados ainda.',
        price: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00006]',
        inStock: true
    },   
    
    {  // [bccb00007] - silver / Fino
        image: 'https://images2.imgbox.com/b3/8c/O66VUjRF_o.jpg',
        name: 'Super Star',
        description: 'Brilhante como uma estrela, indicado para pessoas quem gosta de brilhar também. Composto por um colar com fio fino e um par de brincos ainda mais brilhantes.',
        price: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00007]',
        inStock: true
    },

    {  // [bccb00008] - silver / Fino
        image: 'https://images2.imgbox.com/d2/ea/seTlxaGb_o.jpg',
        name: 'Flying Light',
        description: 'Os flamingos são mensageiros da luz e guiam os céus, segundo dizem. Composto por um colar com fio fino e um par de brincos.', 
        rice: '€5,50',
        colors: ['silver'],
        itemCode: '[bccb00008]',
        inStock: true
    },

    {  // [bccb00009] - gold / Fino
        image: 'https://images2.imgbox.com/12/12/S4ozR4L3_o.jpg',
        name: 'Timeless',
        description: 'Sem tempo? Impossível, com este colar em aço dourado o tempo parece "infinito". Composto por um colar com fio fino e um par de brincos que quase são uma máquina do tempo.',
        price: '€5,50',
        colors: ['gold'],
        itemCode: '[bccb00009]',
        inStock: true
    },

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
        const corDiv = document.createElement('div');
        corDiv.className = `cor-artigo-${color}`
        corDiv.classList.add('div-cor')
        corContainer.appendChild(corDiv)
    });
}

// _Exibir o artigo na janela pop-up com base no indice:
function exibirArtigoPopUp(index){
    nomeArtigo.textContent = itemsData[index].name;
    descArtigo.textContent = itemsData[index].description;
    precoArtigo.textContent = itemsData[index].price
    popImage.src = itemsData[index].image;

    // __adicionar cor
    addColor(itemsData[index].colors)

    // __Ocultar botões:
    // ___esconder o botão "anterior" na primeira página
    btnAnterior.style.display = (index == 0 ) ? 'none' : 'inline-block';

    // ___esconder o botão "seguinte"
    btnSeguinte.style.display = (index == totalArtigos - 1 ) ? 'none' : 'inline-block';
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
        popup.classList.add('showpop');
        document.body.style.overflow = 'hidden';

        // ___ocultar "back-top-btn"
        document.querySelector('#back-top-btn').style.visibility = 'hidden'
    }
})

// _Botão fechar pop-up
close.addEventListener('click', ()=>{
    popup.classList.remove('showpop');
    document.body.style.overflow = '';

    // __ativar "back-top-btn"
    // ___ocultar "back-top-btn"
    document.querySelector('#back-top-btn').style.visibility = 'visible';
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


// Event Listener para mudar imagem ao clicar na cor
corContainer.addEventListener('click', function(event){
    if (event.target.tagName === 'DIV') {
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


// Carregar Imagens:
// _event listener para o botão "Carragar Mais"
document.querySelector('#load-btn').addEventListener('click', loadMoreItems);

// _carregar items no load da página
loadMoreItems ();

// _Função para criar os elementos necessários
function loadMoreItems () {

    // _calcular o index inicial para carregar novos items
    const startIndex = (currentPage - 1) * itemsPerPage;

    // _calcular o index final para carregar novos items
    const endIndex = startIndex + itemsPerPage;

    // neste ponto, pede ser feita uma solicitação AJAX para carregar os dados do servidor
    setTimeout(() => {
     
    // Verificar se há mais items a serem carregados
    if (startIndex < totalArtigos) {
        // __adicionar os novos itens ao "container"
        for (let i = startIndex; i < endIndex && i < totalArtigos; i++){

            // ___Verificar se o item já fo carregado
            if ( !Array.isArray(itemsLoaded) || !itemsLoaded.includes(i) ) {  
                
                // ____marcar o item como carregado
                if ( Array.isArray(itemsLoaded)) {
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
        if ( startIndex + itemsPerPage >= totalArtigos) {
            document.getElementById('load-btn').style.display = 'none';
        } 

    currentPage++

    }, 500); // tempo de simulação de uma requisição assíncrona (pode ser substituído por uma solicitação real)
}


// Remover imagens carregadas dinâmicamente ao precionar o "back-top-btn"
// _envet listener 
document.querySelector('#back-top-btn').addEventListener('click', () => {
    if ( itemsLoaded.length > itemsPerPage ) {
        removeImagesBackTop();
    }
});

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