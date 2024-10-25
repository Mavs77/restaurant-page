import "./styles.css"; 

// import cover from './assets/cover-art.jpg'

// const imgElement = document.createElement('img'); 
// imgElement.src = cover; 
// document.body.appendChild(imgElement)

// console.log('connection is set!!!')

import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";

function clearContent() {
    const contentDiv = document.getElementById('content'); 
    contentDiv.innerHTML = ''; //clear previous content 
}

function loadPage(pageLoader) {
    clearContent(); 
    const contentDiv = document.getElementById('content'); 
    contentDiv.appendChild(pageLoader())
}

document.getElementById('home-tab').addEventListener('click', () => loadPage(loadHome));
document.getElementById('about-tab').addEventListener('click', () => loadPage(loadAbout));
document.getElementById('menu-tab').addEventListener('click', () => loadPage(loadMenu));

// Load the home page by default
loadPage(loadHome);
