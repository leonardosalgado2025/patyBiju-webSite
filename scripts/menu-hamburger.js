const menuIcon = document.querySelector('#menu-icon');
const menuBurger = document.querySelector('.navbar-menu-burger');
const categorias = document.querySelectorAll('.subcategorizado');
const listaCategorias = document.querySelectorAll('#lista-menu-burger > li');

let menuAberto = false;

// Funções para abrir e fechar o menu burger:
// _abrir
function abrirMenuBurger() {
    if (!menuAberto) {
        menuBurger.style.opacity = '1';
        menuBurger.style.visibility = 'visible'
        menuAberto = true;
    }
}

//_fechar
function fecharMenuBurger() {
    if (menuAberto) {
        menuBurger.style.opacity = '0';
        menuBurger.style.visibility = 'hidden'
        menuAberto = false;
    }

    fecharDropdowns()
}


// Função para fechar dropdowns:
function fecharDropdowns(categoriaClicada) {
    categorias.forEach(categoria => {
        if (categoria !== categoriaClicada) {
            const dropdown = categoria.querySelector('.dropdown-burger');
            dropdown.style.display = 'none';
        }
    });
}


// Event Listeners:
// _Fechar menu caso a categoria não possuir subcategorias
listaCategorias.forEach(listItem => {
    listItem.addEventListener('click', () => {
        const temSubcategoria = listItem.classList.contains('subcategorizado');

        if (!temSubcategoria) {
            fecharMenuBurger();
        }
    })
})

// _Abrir menu burger
menuIcon.addEventListener('click', () => {
    menuAberto ? fecharMenuBurger() : abrirMenuBurger();
});

// _Abrir e fechar dropdowns
categorias.forEach(categoria => {
    categoria.addEventListener('click', () => {
        // __fechar os dropdowns antes ativos
        fecharDropdowns(categoria);

        // __abrir o novo dropdown, selecionado
        const dropdown = categoria.querySelector('.dropdown-burger');
        const temSubcategorias = dropdown && dropdown.children.length > 0;

        if (temSubcategorias) {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }
    });

    const opcoes = categoria.querySelectorAll('.dropdown-burger li');
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', () => {
            fecharMenuBurger();
            // Adicione aqui o código específico para lidar com a opção clicada
        });
    });
});

function rolou () {
    console.log('O user rolou a página')
}


// Função para fechar menu ao dar scroll:
window.addEventListener('scroll', () => {
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(fecharMenuBurger(), 200)
})





