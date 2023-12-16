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

    
    { // [bccb00001] - Gold / Fino 
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00001]g.jpg', 
        name: ' Primavera Gold', 
        description: 'Conjunto em aço de pétalas de orquídea composto por um colar com fio fino e leve e um par de brincos suaves. Demonstra uma sensação de leveza e primaveril.', 
        price: '€5,50', 
        colors: ['gold'], 
        sku: '[bccb00001]g',
        urlShopify: ''
    },
    
    { // [bccb00002] - Silver-Gold / Fino   
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00002]s.jpg',
        name: 'Coração Leve',
        description: 'Conjunto em aço de um coração que suporta uma pérola, composto por um colar com fio fino e um par de brincos apaixonados.',
        price: '€5,50',
        colors: ['silver', 'gold'],
        sku: '[bccb00002]s',
        imagegold: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00002]g.jpg',
        urlShopify: ''
    },

    { // [bccb00003] - Silver / Grosso
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00003]s.jpg', 
        name: 'Bosque Prateado', 
        description: 'Diretamente dos bosques, este conjunto em aço é a combinação perfeita para os amantes de ursos. Composto por um colar com fio grosso e um par de brincos ainda mais fofos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00003]s',
        urlShopify: ''
    },

    {  // [bccb00004] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00004]s.jpg', 
        name: 'Céu Perolado',
        description: 'Uma fusão entre uma estrela do céu e uma pérula do mar que formam uma aliança pacifica mas destemida. Composto por um colar com fio fino e um par de brincos mais determinados ainda.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00004]s',
        urlShopify: '',
    },

    { // [bccb00005] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00005]s.jpg',
        name: 'Silver Swan',
        description: 'Diretamente de um lago distante para o seu pescoço. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00005]s',
        urlShopify: '',
    },

    {  // [bccb00006] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00006]s.jpg',
        name: 'Freedom',
        description: 'Livre como uma libelinha a voar com o vento. Composto por um colar com fio fino e um par de brincos mais determinados ainda.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00006]s',
        urlShopify: '',
    },   
    
    {  // [bccb00007] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00007]s.jpg',
        name: 'Super Star',
        description: 'Brilhante como uma estrela, indicado para pessoas quem gosta de brilhar também. Composto por um colar com fio fino e um par de brincos ainda mais brilhantes.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00007]s',
        urlShopify: '',
    },

    {  // [bccb00008] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00008]s.jpg',
        name: 'Flying Light',
        description: 'Os flamingos são mensageiros da luz e guiam os céus, segundo dizem. Composto por um colar com fio fino e um par de brincos.', 
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00008]s',
        urlShopify: '',
    },

    {  // [bccb00009] - Gold / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00009]g.jpg',
        name: 'Timeless',
        description: 'Sem tempo? Impossível, com este colar em aço dourado o tempo parece "infinito". Composto por um colar com fio fino e um par de brincos que quase são uma máquina do tempo.',
        price: '€5,50',
        colors: ['gold'],
        sku: '[bccb00009]g',
        urlShopify: '',
    },

    {  // [bccb00010] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00010]s.jpg',
        name: 'Always',
        description: 'Em todo o lado, a todo o momento. Este conjunto em aço é um mistério do tempo e do espaço. Composto por um colar com fio fino e um par de brincos misteriosos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00010]s',
        urlShopify: '',
    },

    {  // [bccb00011] - Silver / Grosso
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00011]s.jpg',
        name: 'Sem Saída',
        description: 'Sem saída? Como assim? Pode ser que este conjunto em aço consiga responder. Composto por um colar com fio grosso e um par de brincos apaixonados.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00011]s',
        urlShopify: '',
    },

    {  // [bccb00012] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00012]s.jpg',
        name: 'Ursonauta',
        description: 'Um urso ou um astronauta? Os dois! Vá daqui até à lua com este conjunto em aço. Composto por um colar com fio fino e um par de brincos de duas luas, mas não é só uma?',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00012]s',
        urlShopify: '',
    },

    {  // [bccb00013] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00013]s.jpg',
        name: 'Shine Bright',
        description: 'Para aqueles com um coração brilhante, este conjunto em aço é um belo presente para os apaixonados. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00013]s',
        urlShopify: '',
    },

    {  // [bccb00014] - Gold / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00014]g.jpg',
        name: 'A Galope',
        description: 'Para os amantes da arte equestre, ou simplesmente de cavalos, este conjunto em aço não precisa de ferradura. Composto por um colar com fio fino e um par de brincos equinos.',
        price: '€5,50',
        colors: ['gold'],
        sku: '[bccb00014]g',
        urlShopify: '',
    },

    {  // [bccb00015] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00015]s.jpg',
        name: 'Clave de Sol',
        description: 'Para rockeiros, metaleiros, clássicos, amantes de jazz, este conjunto em aço adequa-se a todos os gostos musicais. Composto por um colar com fio fino e um par de brincos solistas.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00015]s',
        urlShopify: '',
    },

    {  // [bccb00016] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00016]s.jpg',
        name: 'Under the Sea',
        description: 'Este conjunto em aço vem diretamente do fundo do mar até ao seu pescoço. Composto por um colar com fio fino e um par de brincos que chamam o verão.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00016]s',
        urlShopify: '',
    },

    {  // [bccb00017] - Silver / Grosso
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00017]s.jpg',
        name: 'Ritmo brilhante',
        description: 'Este conjunto em aço é perfeito para os mais os músicos que gostam de brilhar. Composto por um colar com fio grosso e um par de brincos brilhantes.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00017]s',
        urlShopify: '',
    },

    {  // [bccb00018] - Silver / Grosso
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00018]s.jpg',
        name: 'Heaven',
        description: 'Este conjunto em aço cabe no pescoço de qualquer cristão. Composto por um colar com fio grosso e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00018]s',
        urlShopify: '',
    },

    {  // [bccb00019] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00019]s.jpg',
        name: 'Girassol',
        description: 'Quem não gosta de girassóis? Mostra que és um amante destas lindas flores. Composto por um colar com fio fino e um par de brincos que giram com o Sol.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00019]s',
        urlShopify: '',
    },

    {  // [bccb00020] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00020]s.jpg',
        name: 'Cloud',
        description: 'Para que está sempre nas nuvens, ou apenas gosta de ver formatos nelas, este conjunto em aço é o mais indicado. Composto por um colar com fio fino e um par de brincos com previsão de chuva.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00020]s',
        urlShopify: '',
    },

    {  // [bccb00021] - Gold / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00021]g.jpg',
        name: 'Vida',
        description: 'Só vivemos uma vez, então é importante aproveitarmos a vida ao máximo. Este conjunto em aço é indicado para os amantes da vida ou médicos. Composto por um colar com fio fino e um par de brincos a 80bpm.',
        price: '€5,50',
        colors: ['gold'],
        sku: '[bccb00021]g',
        urlShopify: '',
    },

    {  // [bccb00022] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00022]s.jpg',
        name: 'Lucky Love',
        description: 'Será um amuleto da sorte no amor? Não sei, mas este conjunto em aço pode simbolizar o que o coração quiser. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00022]s',
        urlShopify: '',
    },

    {  // [bccb00023] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00023]s.jpg',
        name: 'Malmequer',
        description: 'Já jogaste ao malmequer? Eu também não mas este conjunto em aço não deixa as pétalas cair, por isso começa a contar por onde quiseres. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00023]s',
        urlShopify: '',
    },

    {  // [bccb00024] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00024]s.jpg',
        name: 'Soul Mates',
        description: 'Este conjunto em aço é certamente o mais apropriado para os casais apaixonados e uma excelente prenda. Composto por um colar com fio fino e um par de brincos calorosos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00024]s',
        urlShopify: '',
    },

    {  // [bccb00025] - Gold / Grosso
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00025]g.jpg',
        name: 'Daisy',
        description: 'Gostas de margaridas? Então este conjunto em aço é perfeito para ti e não precisas de o regar. Composto por um colar com fio grosso e um par de brincos florais.',
        price: '€5,50',
        colors: ['gold'],
        sku: '[bccb00025]g',
        urlShopify: '',
    },

    {  // [bccb00026] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00026]s.jpg',
        name: 'Moon Light',
        description: 'És um amante da noite? Então este conjunto em aço é perfeito para ti . Composto por um colar brilhante com fio fino e um par de brincos aluados.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00026]s',
        urlShopify: '',
    },

    {  // [bccb00027] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00027]s.jpg',
        name: 'Renascer',
        description: 'Este conjunto em aço pode simbolizar várias fazer: amadurecimento, nascimento, aprendizagem, recomeço, tu decides! Composto por um colar com fio fino e um par de brincos filosóficos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00027]s',
        urlShopify: '',
    },

    {  // [bccb00028] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00028]s.jpg',
        name: 'Lucky Charm',
        description: 'Com este conjunto em aço, escusas de procurar trevos de quatro folhas. Composto por um colar com fio fino e um par de brincos perolados.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00028]s',
        urlShopify: '',
    },

    {  // [bccb00029] - SGold / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00029]g.jpg',
        name: 'União',
        description: 'Quem não ama a sua família? Com este conjunto em aço podes mostrar isso a toda a gente. Composto por um colar com fio fino e um par de brincos reunidos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00029]g',
        urlShopify: '',
    },

    {  // [bccb00030] - Silver / Fino
        image: '../../images/items/bijuteria/conjuntos-colar-brincos/[bccb00030]s.jpg',
        name: 'Novo Começo',
        description: 'Segundo dizem, os golfinhos simbolizam um "Novo Começo", então podes recomeçar com este conjunto em aço. Composto por um colar com fio fino e um par de brincos.',
        price: '€5,50',
        colors: ['silver'],
        sku: '[bccb00030]s',
        urlShopify: '',
    },
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

// _Fechar pop-up
// __Botão fechar
close.addEventListener('click', ()=>{
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
loadBtn.addEventListener('click', loadMoreItems);

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

                console.log('Current Page: ', currentPage)

                if (  currentPage == 3 ) {
                    abilitarPubInterna();
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