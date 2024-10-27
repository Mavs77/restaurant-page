export default function loadMenu() {
    // Create a div for the menu content
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    // Create an unordered list (ul) for the menu items
    const menuList = document.createElement('ul');

    // Add menu items directly as list items (li)
    menuList.innerHTML = `
        <li>Moambe Chicken - $15.99</li>
        <li>Saka-Saka - $12.99</li>
        <li>Fumbwa - $14.99</li>
        <li>Makayabu - $16.99</li>
        <li>Chikwanga - $6.99</li>
        <li>Pondu - $11.99</li>
        <li>Fufu - $5.99</li>
    `;

    // Append the unordered list to the menu content div
    menuContent.appendChild(menuList);

    menuContent.style.marginTop = '0.5rem';
    menuContent.style.color = 'white';
    menuContent.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    menuContent.style.padding = '10px';
    menuContent.style.fontSize = '5em';
    menuContent.style.fontWeight = 'bold';

    // Return the menu content to be appended to the DOM
    return menuContent;
}


