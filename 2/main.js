import { links } from "./linkData.js";

function createLinks() {
    const spacer = document.querySelector('.space')
    links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.id = link.id;
        const paragraph = document.createElement("p");
        paragraph.textContent = link.text;
        anchor.appendChild(paragraph);
        anchor.addEventListener('click', () => loadPage(link.content.title, link.content.description));
        spacer.before(anchor);
    });
}

function loadPage(title, description) {
    const markup = `
        <h1>${title}</h1>
        <p>${description}</p>
    `;
    
    const mainSection = document.querySelector("main");
    mainSection.innerHTML = markup;
}

window.addEventListener('load', createLinks);