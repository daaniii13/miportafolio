// --- 1. Gestión del copyright ---
// Actualiza automáticamente el contenido del elemento con ID "year" al año actual.
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
}

// --- 2. Menú de navegación móvil ---
const toggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

/**
 * Controla la visibilidad del menú y actualiza los atributos de accesibilidad.
 * @param {boolean} open - indica si el menú debe mostrarse o esconderse
 */
function setMenu(open) {
    // Cambia la visibilidad usando el atributo HTML 'hidden'
    mobileMenu.hidden = !open;
    // Actualiza el atributo ARIA para lectores de pantalla (accesibilidad)
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

// Solo inicializa los listeners si los elementos existen en el DOM
if (toggle && mobileMenu) {
    
    // Evento Click: abre/cierra el menú alternando su estado actual
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        setMenu(!isOpen);
    });

    // Mejora de UX: cierra el menú automáticamente al hacer clic en un enlace.
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Estado inicial: asegura que el menú comience cerrado al cargar la página
    setMenu(false);
}