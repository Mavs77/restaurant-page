export default function loadAbout() {
    // Remove any background image
    document.body.style.backgroundImage = 'none';

    // Create a wrapper div for the content
    const wrapperDiv = document.createElement('div');
    wrapperDiv.style.display = 'flex';
    wrapperDiv.style.justifyContent = 'center';
    wrapperDiv.style.alignItems = 'center';
    wrapperDiv.style.height = '50vh'; // Full viewport height
    wrapperDiv.style.width = '50vw'; // Full viewport width

    // Create a div for the About content
    const aboutContent = document.createElement('div');
    aboutContent.textContent = 
        "Our Kitchen was born from a dream to share the rich, authentic flavors of Congolese cuisine with the world. Inspired by home-cooked meals, we celebrate Congo's culinary heritage. Every dish, from the slow-cooked Moambe Chicken to the tender Saka-Saka, honors generations of tradition. We believe food is more than just a meal—it’s a connection to our roots and a story of resilience. Join us for an unforgettable taste of Congo, where every bite is a celebration of culture, community, and flavor.";

    // Style the aboutContent div
    aboutContent.style.color = 'white';
    aboutContent.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    aboutContent.style.padding = '10px';
    aboutContent.style.marginTop = '8rem';
    aboutContent.style.fontSize = '3rem';
    aboutContent.style.fontWeight = 'bold';
    aboutContent.style.width = '40vw';
    aboutContent.style.textAlign = 'center'; // Center the text inside the div

    // Append the aboutContent to the wrapper div
    wrapperDiv.appendChild(aboutContent);

    // Return the wrapper div, which contains the centered content
    return wrapperDiv;
}

