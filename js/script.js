// Activar automáticamente la pestaña correcta según la página actual
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Quitamos cualquier clase active previa (por si acaso)
        link.classList.remove('active');
        // Comparamos con el nombre de archivo de la página actual
        if (href === currentPage) {
            link.classList.add('active');
        }
        // Caso especial para la raíz o index.html
        if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
});