import { createContent } from './index.js';

export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    createContent('h1', 'Menu');
    createContent('hr', '');
    createContent('h2', 'Beverages');


    const div = document.createElement('div');
    content.appendChild(div);

    createContent('h2', 'Water: $1', div);
    createContent('h3', 'Water is the only valid and best on the planet', div);
    createContent('hr', '', div);
    createContent('h2', 'Milk: $1', div);
    createContent('h3', 'Only real drink alongside with water', div);
    createContent('hr', '', div);
    createContent('h2', 'Water and Milk: $1.5', div);
    createContent('h3', 'A combination of water and milk!', div);

    createContent('h2', 'Sides')

    const div2 = document.createElement('div');
    content.appendChild(div2);

    createContent('h2', 'Toast and Jam: $3', div2);
    createContent('h3', 'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.', div2);
    createContent('hr', '', div2);
    createContent('h2', 'Fresh Fruit: $3', div2);
    createContent('h3', 'A small bowl of fresh fruit, whatever we find at the market for the day.', div2);
    createContent('hr', '', div2);
    createContent('h2', 'Epic summer salad: $4', div2);
    createContent('h3', 'Savor the taste of summer with our Epic Summer Salad, a delightful medley of fresh, seasonal ingredients that celebrate the vibrant flavors of the season. ', div2);

    createContent('h2', 'Main Dishes')

    const div3 = document.createElement('div');
    content.appendChild(div3);

    createContent('h2', 'Beary Veggie Sandwich: $7', div3);
    createContent('h3', 'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.', div3);
    createContent('hr', '', div3);
    createContent('h2', 'BLT: $6', div3);
    createContent('h3', 'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.', div3);
    createContent('hr', '', div3);
    createContent('h2', 'French Toast: $5', div3)
    createContent('h3', 'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.', div3);

    createContent('h2', 'Desserts')

    const div4 = document.createElement('div');
    content.appendChild(div4);

    createContent('h2', 'Greek Yogurt Parfait: $3', div4);
    createContent('h3', 'Layered creamy Greek yogurt with fresh berries and a sprinkle of granola.', div4);
    createContent('hr', '', div4);
    createContent('h2', 'Baked Apples with Cinnamon and Walnuts: $4', div4);
    createContent('h3', 'Indulge in the comforting warmth of our Baked Apples Delight, a wholesome dessert that captures the essence of fall in every bite', div4);
    createContent('hr', '', div4);

    const footer = document.createElement('footer');
    content.appendChild(footer);

    createContent('p', 'Lorem ipsum', footer);
    createContent('p', 'dolor sit amet', footer);
    createContent('p', 'consectetur adipiscing elit', footer);
}