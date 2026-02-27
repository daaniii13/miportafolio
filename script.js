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
 * @param {boolean} open - Indica si el menú debe mostrarse (true) o esconderse (false).
 */
function setMenu(open) {
    // Cambia la visibilidad usando el atributo HTML 'hidden'
    mobileMenu.hidden = !open;
    // Actualiza el atributo ARIA para lectores de pantalla (Accesibilidad)
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
}

// Solo inicializamos los listeners si los elementos existen en el DOM
if (toggle && mobileMenu) {
    
    // Evento Click: Abre/cierra el menú alternando su estado actual
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        setMenu(!isOpen);
    });

    /**
     * Mejora de UX: Cierra el menú automáticamente al hacer clic en un enlace.
     * Útil en Single Page Applications (SPA) o menús con anclas (#seccion).
     */
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Estado inicial: Asegura que el menú comience cerrado al cargar la página
    setMenu(false);
}