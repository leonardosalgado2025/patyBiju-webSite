const menuBtn = document.querySelector('#menu-icon');
const burgerList = document.querySelector('.navbar-menu-hamburger');
let aberto = false;

// Fechar todos os dropdowns
function fecharDropdowns() {
    var todosDropdowns = document.querySelectorAll('.dropdown-burger');
    todosDropdowns.forEach(function (dropdown) {
        dropdown.style.display = 'none';
        });
}

// EventListeners:
menuBtn.addEventListener('click', () => {
    if (aberto == false) {
        abrirMenu ();
    } else {
        fecharMenu ();
    }
})

// Funções abrir e fehar menu
function abrirMenu () {
    if (aberto == false) {
        burgerList.style.display = 'block';
        aberto = true;
    }
}

function fecharMenu () {
    if (aberto = true) {
        burgerList.style.display = 'none';
        aberto = false;
        fecharDropdowns();
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Selecionar todos os elementos dentro da lista com a classe ".dropdown-burger"
    var listaItens = document.querySelectorAll('.dropdown-burger li');

    // Adicionar um eventListener a cada elemento do dropdown:
    listaItens.forEach(function (item) {
        item.addEventListener('click', function () {
            // Fechar os dropdowns antes de redirecionar
            fecharDropdowns();

            // Faça algo quando um item do dropdown for clicado (ex.: redirecionar para o link)
            window.location.href = item.querySelector('a').getAttribute('href');
        });
    });

    // Adicione um eventListener aos elementos que contêm subcategorias
    var categoriasComDropdown = document.querySelectorAll('.navbar-menu-hamburger > li');

    categoriasComDropdown.forEach(function (categoria) {
        categoria.addEventListener('click', function () {


            // Fechar os dropdowns abertos
            fecharDropdowns();

            // Mostre ou oculte o dropdown correspondente
            var dropdownID = categoria.querySelector('.dropdown-burger').id;
            var dropdownElement = document.getElementById(dropdownID);
            
            // _verificar se o display = "none", se for, substituir por "block"
                if (dropdownElement.style.display === 'none' || dropdownElement.style.display === '' ) {

                    dropdownElement.style.display = 'block';

                } else {

                    dropdownElement.style.display = 'none';

                }
        });
    });
});



