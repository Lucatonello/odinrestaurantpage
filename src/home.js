import { createContent } from './index.js'

export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    createContent('h1', 'My Restaurant');
    createContent('h2', 'Best restaurant in town');
    createContent('p', 'This restaurant is awesome');
    createContent('img', 'src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="restaruant"');
    createContent('hr', '');

    const div = document.createElement('div');
    content.appendChild(div);

    createContent('h2', 'Hours', div);
    createContent('p', 'Sunday: 11am - 6pm', div)
    createContent('p', 'Monday: 6am - 8pm', div)
    createContent('p', 'Wednesday: 6am - 8pm', div)
    createContent('p', 'Thursday: 6am - 8pm', div)
    createContent('p', 'Friday: 1pm - 11pm', div)
    createContent('p', 'Saturday: 1pm - 11pm', div)
    
    const div2 = document.createElement('div');
    content.appendChild(div2);

    createContent('h2', 'locations', div2);
    createContent('hr', '', div2);
    createContent('p', '6820 Commerce St, Springfield, VA 22150, USA', div2);
    createContent('hr', '', div2);
    createContent('p', '121 E Water St, Charlottesville, VA 22902, USA', div2);
    createContent('hr', '', div2);
    createContent('p', '228 W Lexington St, Baltimore, MD 21201, USA', div2);
    createContent('hr', '', div2);
    createContent('p', '321 W Hargett St, Raleigh, NC 27601, USA', div2);

    const footer = document.createElement('footer');
    content.appendChild(footer);

    createContent('p', 'Lorem ipsum', footer);
    createContent('p', 'dolor sit amet', footer);
    createContent('p', 'consectetur adipiscing elit', footer);
}


