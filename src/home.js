// home.js
import backgroundImage from './assets/Home-background.jpeg';

export default function loadHome() {
    // Set the background image
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';

    // Create content for the home page
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.style.position = 'relative';
    homeContent.style.height = '40vh';
    homeContent.style.display = 'flex';
    homeContent.style.justifyContent = 'center';
    homeContent.style.alignItems = 'center';

    // Create a paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Explore our delicious cuisine';
    paragraph.style.marginTop = '0.5rem';
    paragraph.style.color = 'white';
    paragraph.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    paragraph.style.padding = '10px';
    paragraph.style.fontSize = '12em';
    paragraph.style.fontWeight = 'bold';

    // Append the paragraph to the home content
    homeContent.appendChild(paragraph);

    // Return home content so it can be appended to the contentDiv
    return homeContent; // Change here
}


