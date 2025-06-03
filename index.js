function addImageWithClass() {
    const img = document.createElement('img');
    img.src = 'images/grocylogo-removebg-preview.png';
    img.classList.add('logo');
    document.body.appendChild(img);
}










document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.bottom-nav .nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
        
            navLinks.forEach(nav => nav.classList.remove('active'));
           
            event.target.classList.add('active');
        });
    });

 
    const categoryCards = document.querySelectorAll('.product-categories .category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('span').textContent;
            alert(`You clicked on the "${categoryName}" category!`);
        });
    });

 
});


