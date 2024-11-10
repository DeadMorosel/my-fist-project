// Данные профиля
let userProfile = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    city: 'Москва',
    services: ['Уроки игры на гитаре', 'Приготовление домашней пиццы']
};

// Функция отображения профиля
function displayProfile() {
    document.getElementById('profile-name').textContent = userProfile.name;
    document.getElementById('profile-email').textContent = userProfile.email;
    document.getElementById('profile-city').textContent = userProfile.city;

    const serviceList = document.getElementById('service-list');
    serviceList.innerHTML = '';
    userProfile.services.forEach((service, index) => {
        const li = document.createElement('li');
        li.textContent = service;

        // Кнопка удаления услуги
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';
        deleteBtn.classList.add('delete-service-btn');
        deleteBtn.addEventListener('click', () => deleteService(index));

        li.appendChild(deleteBtn);
        serviceList.appendChild(li);
    });
}

// Функция для редактирования профиля
document.getElementById('edit-profile-btn').addEventListener('click', function() {
    const newName = prompt('Введите новое имя', userProfile.name);
    const newEmail = prompt('Введите новый email', userProfile.email);
    const newCity = prompt('Введите новый город', userProfile.city);

    if (newName) userProfile.name = newName;
    if (newEmail) userProfile.email = newEmail;
    if (newCity) userProfile.city = newCity;

    displayProfile();
});

// Функция для добавления новой услуги
document.getElementById('add-service-btn').addEventListener('click', function() {
    const newService = prompt('Введите название новой услуги');
    if (newService) {
        userProfile.services.push(newService);
        displayProfile();
    }
});

// Функция для удаления услуги
function deleteService(index) {
    userProfile.services.splice(index, 1); // Удаляем услугу по индексу
    displayProfile(); // Обновляем профиль
}

// Загрузка и отображение нового фото профиля
document.getElementById('upload-photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-photo').src = e.target.result;
        };
        reader.readAsDataURL(file); // Читаем файл и отображаем изображение
    }
});

// Изначально отображаем профиль
displayProfile();
