import { loadHome } from './home.js';

export function createContent(type, content) {
    const newContent = document.createElement(type);
    if (type === 'img') {
        const attributes = content.split(' ');

        attributes.forEach(attribute => {
            const [name, value] = attribute.split('=');
            newContent.setAttribute(name, value.replace(/"/g, ''));
        });
    } else {
        newContent.innerHTML = content;
    }
    document.getElementById('content').appendChild(newContent);
}
function init() {
    document.querySelector('button[type="button"]:nth-child(1)').addEventListener('click', loadHome);

    loadHome();
}

document.addEventListener('DOMContentLoaded', init);

