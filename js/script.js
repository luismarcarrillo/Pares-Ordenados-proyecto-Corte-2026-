document.addEventListener('DOMContentLoaded', () => {
    // 1. Activar pestaña según página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.remove('active');
        if (href === currentPage) {
            link.classList.add('active');
        }
        if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });

    // 2. Barra de progreso de lectura
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${Math.min(scrolled, 100)}%`;
        });
    }

    // 3. Botón "volver arriba" (creado dinámicamente)
    const backBtn = document.createElement('button');
    backBtn.id = 'back-to-top';
    backBtn.innerHTML = '↑';
    backBtn.title = 'Volver al inicio';
    backBtn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(backBtn);

    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });

    // Acción de scroll suave al hacer clic
    backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});