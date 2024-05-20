import { createContent } from './index.js';

export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    createContent('h1', 'Contact');
    createContent('p', 'email: realemail@nofake.com')
    createContent('p', 'phone: 55 555 555')

}