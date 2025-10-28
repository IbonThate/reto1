// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos del menú
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('menu-list');

    // 2. Definir la función para alternar el menú
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;

        // Alternar la clase 'open' en la lista (para los estilos CSS)
        navList.classList.toggle('open');
        
        // Alternar el atributo aria-expanded en el botón (para accesibilidad)
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Opcional: enfocar el primer enlace del menú cuando se abre
        if (!isExpanded) {
            navList.querySelector('li a').focus();
        }
    }

    // 3. Añadir el escuchador de eventos al botón de alternar
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // --- Funcionalidad Adicional (Opcional) ---

    // 4. Cerrar el menú si se hace clic fuera de él (útil para la navegación por teclado)
    document.addEventListener('click', (event) => {
        const isClickInsideNav = menuToggle.contains(event.target) || navList.contains(event.target);
        const isMenuOpen = navList.classList.contains('open');

        if (!isClickInsideNav && isMenuOpen) {
            // Si el clic es fuera y el menú está abierto, lo cerramos
            navList.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // 5. Cerrar el menú al presionar la tecla ESC
    document.addEventListener('keydown', (event) => {
        const isMenuOpen = navList.classList.contains('open');
        if (event.key === 'Escape' && isMenuOpen) {
            navList.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus(); // Opcional: devuelve el foco al botón del menú
        }
    });
});