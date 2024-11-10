// Массив с примерами услуг (в реальном проекте данные будут поступать с сервера)
const services = [
    { name: "Уроки вокала", description: "Научим петь на профессиональном уровне.", location: "Москва" },
    { name: "Уроки гитары", description: "Индивидуальные занятия для начинающих и продвинутых.", location: "Санкт-Петербург" }
];

// Функция для отображения услуг
function displayServices() {
    const servicesList = document.getElementById('services-list');
    servicesList.innerHTML = '';

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');

        serviceCard.innerHTML = `
            <h3>${service.name}</h3>
            <p><strong>Описание:</strong> ${service.description}</p>
            <p><strong>Город:</strong> ${service.location}</p>
        `;

        servicesList.appendChild(serviceCard);
    });
}

// Обработчик добавления новой услуги
document.getElementById('add-service-btn').addEventListener('click', () => {
    const serviceName = document.getElementById('service-name').value;
    const serviceDescription = document.getElementById('service-description').value;
    const serviceLocation = document.getElementById('service-location').value;

    if (serviceName.trim() && serviceDescription.trim() && serviceLocation.trim()) {
        // Добавляем новую услугу в массив (для примера)
        services.push({
            name: serviceName,
            description: serviceDescription,
            location: serviceLocation
        });

        // Очищаем форму
        document.getElementById('service-name').value = '';
        document.getElementById('service-description').value = '';
        document.getElementById('service-location').value = '';

        // Обновляем список услуг
        displayServices();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Изначально отображаем услуги
displayServices();
