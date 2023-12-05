let itemsPerPage = 3; // Número de itens por página (Tem de ser acurate)
let currentPage = 1;  // Página inicial

const itemsData = [
    { image: 'images/items/colar-azul-teste.jpg', description: 'Aqua Blue', price: '€6,70' },
    { image: 'images/items/conjunto-dourado-teste.png', description: 'Douro Vivante', price: '€4,20' },
    { image: 'images/items/pulseira-colorida-teste.jpg', description: 'Rainbow and Flowers', price: '€3,70' }
    // Adicione mais objetos conforme necessário
];

/* Enevnt Listener */
document.querySelector('#load-btn').addEventListener('click', loadMoreItems)

  function loadMoreItems() {
    currentPage++;

    // Simulação de uma requisição assíncrona para obter mais itens
    // Neste ponto, você pode fazer uma solicitação AJAX para carregar os dados do servidor
    setTimeout(() => {
        const container = document.getElementById('load-container');
        // Adicione os novos itens ao container
        for (let i = 0; i < itemsPerPage; i++){
                
                const newItem = document.createElement('article');
                newItem.className = 'item';

                // Criar div para a imagem
                const imageDiv = document.createElement('div');
                imageDiv.className = 'item-img';
            
                // Criar imagem
                const newImage = document.createElement('img');
                newImage.src = itemsData[i].image;
                newImage.alt = `Imagem ${i + (currentPage - 1) * itemsPerPage + 1}`;
            
                // Adicionar imagem à div
                imageDiv.appendChild(newImage);

                // Adicionar div da imagem ao item
                newItem.appendChild(imageDiv);

                // Criar div texto
                const textDiv = document.createElement('div');
                textDiv.className = 'item-desc';

                // Criar titulo
                const newTitle = document.createElement('h4');
                newTitle.textContent = itemsData[i].description;
                textDiv.appendChild(newTitle);

                // Criar preço
                const newPrice = document.createElement('p');
                newPrice.textContent = itemsData[i].price;
                textDiv.appendChild(newPrice);

                //Adicionar a textDiv ao newItem
                newItem.appendChild(textDiv);
            

                container.appendChild(newItem);
        
        }

        console.log("currentPage:", currentPage);
        console.log("itemsPerPage:", itemsPerPage);
        console.log("Total de itens:", itemsData.length);


        // Se não houver mais itens para carregar, oculte o botão
        if ((currentPage - 1) * itemsPerPage >= itemsData.length) {
            document.getElementById('load-btn').style.display = 'none';
        } 
    }, 500); // Tempo de simulação de uma requisição assíncrona (pode ser substituído por uma solicitação real)
}

// O número total de itens é a quantidade total de objetos em itemsData
const totalItems = itemsData.length; 
