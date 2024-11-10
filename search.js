// Массив с примерами услуг (это просто для примера, в реальном проекте данные будут приходить с сервера)
const services = [
    { name: "Уроки вокала", description: "Научим петь на профессиональном уровне.", location: "Москва" },
    { name: "Уроки гитары", description: "Индивидуальные занятия для начинающих и продвинутых.", location: "Санкт-Петербург" },
    { name: "Программирование", description: "Обучение веб-разработке и мобильным приложениям.", location: "Москва" },
    { name: "Кулинария", description: "Как приготовить идеальный борщ и другие блюда.", location: "Казань" }
];

// Функция для отображения списка найденных услуг
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>Услуги не найдены.</p>';
    } else {
        results.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('search-card');

            serviceCard.innerHTML = `
                <h3>${service.name}</h3>
                <p><strong>Описание:</strong> ${service.description}</p>
                <p><strong>Город:</strong> ${service.location}</p>
            `;

            resultsContainer.appendChild(serviceCard);
        });
    }
}

// Функция для поиска услуг по запросу
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-query').value.toLowerCase().trim();

    const results = services.filter(service =>
        service.name.toLowerCase().includes(query) ||
        service.location.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
    );

    displaySearchResults(results);
});
