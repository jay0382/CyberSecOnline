// Substitua 'YOUR_ACCESS_KEY' pela sua chave da API Mediastack
const apiKey ='d03af7d24f42516ea117d9e617c9679e';

// Função para buscar as notícias e preencher o carrossel
async function fetchNews() {
    try {
        const response = await fetch(http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=technology&languages=pt);
        const data = await response.json();

        const newsContainer = document.querySelector('#news-section .carousel-container');

        // Limpar conteúdo existente
        newsContainer.innerHTML = '';

        // Verificar se há dados
        if (data.data && data.data.length > 0) {
            data.data.slice(0, 3).forEach(newsItem => { // Limitar a 3 notícias
                // Criar um slide para cada notícia
                const slide = document.createElement('div');
                slide.innerHTML = `
                    <h3>${newsItem.title}</h3>
                    <p>${newsItem.description || 'Descrição não disponível.'}</p>
                `;
                newsContainer.appendChild(slide);
            });

            // Inicializar o carrossel após carregar os slides
            initializeCarousel();
        } else {
            newsContainer.innerHTML = '<div><p>Nenhuma notícia disponível no momento.</p></div>';
        }
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}

// Função para controlar o carrossel
function initializeCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('#news-section .carousel-container div');
    const totalSlides = slides.length;

    function updateSlide() {
        const container = document.querySelector('#news-section .carousel-container');
        container.style.transform = translateX(-${currentSlide * 100}%);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide();
    }

    // Adicionar eventos aos botões
    const nextButton = document.querySelector('#news-section .carousel-btn.next');
    const prevButton = document.querySelector('#news-section .carousel-btn.prev');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Rolar automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Chamar a função fetchNews ao carregar a página
document.addEventListener('DOMContentLoaded', fetchNews);



