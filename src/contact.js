import { createContent } from './index.js';

export function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    createContent('h1', 'Contact Us');
    createContent('hr', '');

    const div = document.createElement('div');
    content.appendChild(div);

    createContent('h2', 'email:', div);
    createContent('h3', 'realemail@nofake.com', div);
    createContent('h2', 'phone:', div);
    createContent('h3', ' 55 555 555', div);
    createContent('h2', 'Schedule a zoom meeting:', div);
    createContent('h3', ' https://zoom.com', div);
    createContent('h2', "Show up at owner's house:", div)
    createContent('h3', '327 Willow Creek Dr, Gillette, WY 82732, USA', div);

    const footer = document.createElement('footer');
    content.appendChild(footer);

    createContent('p', 'Lorem ipsum', footer);
    createContent('p', 'dolor sit amet', footer);
    createContent('p', 'consectetur adipiscing elit', footer);
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
}