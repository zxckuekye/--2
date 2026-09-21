const nameInput = document.querySelector('.name-input');
const btnChangeName = document.querySelector('.btn-change-name');
const profileName = document.querySelector('.profile-name');
const btnTheme = document.querySelector('.btn-theme');

btnChangeName.addEventListener('click', function () {
  profileName.textContent = nameInput.value;
});

btnTheme.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});