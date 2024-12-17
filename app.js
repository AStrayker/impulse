// Открытие и закрытие меню
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

// Загрузка меню из JSON
fetch('menu.json')
    .then(response => response.json())
    .then(menu => {
        const menuItems = document.getElementById("menu-items");
        menu.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#">${item}</a>`;
            menuItems.appendChild(li);
        });
    });

// Загрузка контента страницы
fetch('content.json')
    .then(response => response.json())
    .then(data => {
        const pageContent = document.getElementById("page-content");
        pageContent.innerHTML = data.content; // Берем текст из JSON
    });

// Поиск с подсказками
const searchInput = document.getElementById("search-input");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    suggestionsBox.innerHTML = ""; // Очищаем предыдущие подсказки

    fetch('content.json') // Сравниваем с контентом
        .then(response => response.json())
        .then(data => {
            const suggestions = data.content.split(" ")
                .filter(word => word.toLowerCase().includes(query))
                .slice(0, 5); // Максимум 5 подсказок

            suggestions.forEach(suggestion => {
                const li = document.createElement("li");
                li.textContent = suggestion;
                suggestionsBox.appendChild(li);
            });
        });
});
