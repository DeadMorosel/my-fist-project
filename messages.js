// Пример списка сообщений (в реальном проекте данные будут поступать с сервера)
const messages = [
    { from: 'Ирина', content: 'Привет! Я заинтересована в уроках вокала. Когда можем начать?' },
    { from: 'Александр', content: 'Здравствуйте! Я готов научить вас готовить. Давайте договоримся о времени.' }
];

// Функция для отображения сообщений
function displayMessages() {
    const messagesList = document.getElementById('messages-list');
    messagesList.innerHTML = '';

    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        messageDiv.innerHTML = `
            <p><strong>От: ${message.from}</strong></p>
            <p>${message.content}</p>
            <button class="reply-btn">Ответить</button>
        `;

        messagesList.appendChild(messageDiv);
    });
}

// Обработчик отправки нового сообщения
document.getElementById('send-message').addEventListener('click', () => {
    const messageContent = document.getElementById('message-input').value;

    if (messageContent.trim()) {
        // Добавляем новое сообщение в массив (для примера)
        messages.push({ from: 'Вы', content: messageContent });

        // Очищаем поле ввода
        document.getElementById('message-input').value = '';

        // Обновляем список сообщений
        displayMessages();
    } else {
        alert('Введите текст сообщения');
    }
});

// Изначально отображаем сообщения
displayMessages();
