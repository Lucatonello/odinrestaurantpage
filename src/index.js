import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import './styles.css';

loadHome();
export function createContent(type, content, parent = null) {
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
    if (parent) {
        parent.appendChild(newContent);
    }
    else {
        document.getElementById('content').appendChild(newContent);
    }
}
function init() {
    document.getElementById('home').addEventListener('click', loadHome);
    document.getElementById('menu').addEventListener('click', loadMenu);
    document.getElementById('contact').addEventListener('click', loadContact);
    loadHome();
}

document.addEventListener('DOMContentLoaded', init);

