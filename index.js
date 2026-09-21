// Находим необходимые элементы
const nameInput = document.querySelector('.name-input');
const btnChangeName = document.querySelector('.btn-change-name');
const profileName = document.querySelector('.profile-name');
const btnTheme = document.querySelector('.btn-theme');

// Обновляем имя в карточке профиля через textContent и input.value
btnChangeName.addEventListener('click', function () {
  profileName.textContent = nameInput.value;
});

// Переключаем CSS-класс темы 'dark' для body
btnTheme.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});