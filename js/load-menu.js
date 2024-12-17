fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.querySelector('.menu');
    data.menu.forEach(item => {
      const menuItem = document.createElement('a');
      menuItem.href = item.link;
      menuItem.textContent = item.name;
      menuContainer.appendChild(menuItem);
    });
  });
