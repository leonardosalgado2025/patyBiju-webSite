const loadMoreBtn = document.querySelector('#load-btn');

// Função para alterra o texto do botão loadMore:
function alterarBotao (){

    // _descobrir a width atual
    let widthAtual = window.innerWidth;

    // _Verificar se a width atual corresponde a < 680
    if (widthAtual < 680) {
        loadMoreBtn.value = 'Carregar +';
    } else {
        loadMoreBtn.value = 'Carregar Mais...'
    }
};

// Chamar a função:
window.onload = alterarBotao;
window.onresize = alterarBotao;