import { createContent } from './index.js'

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    createContent('h1', 'My Restaurant');
    createContent('h2', 'Best restaurant in town');
    createContent('p', 'This restaurant is awesome');
    createContent('img', 'src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="restaruant"');
}