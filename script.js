// Получаем элементы
const toggleButton = document.getElementById('toggle-button');
const sideMenu = document.getElementById('side-menu');

// Открытие/закрытие панели
toggleButton.addEventListener('click', () => {
    if (sideMenu.style.right === '0px') {
        sideMenu.style.right = '-150px'; // Скрываем панель
        toggleButton.textContent = 'Открыть меню'; // Меняем текст кнопки
    } else {
        sideMenu.style.right = '0'; // Раскрываем панель
        toggleButton.textContent = 'Закрыть меню'; // Меняем текст кнопки
    }
});
