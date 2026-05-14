// Espera a que todo el HTML esté cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  // Botón "Todos"
  const allButton = document.querySelector(".filter-btn.active");

  // Todos los botones de filtro excepto "Todos"
  const filterButtons = Array.from(
    document.querySelectorAll(".filter-btn")
  ).filter((button) => button.textContent.trim().toLowerCase() !== "todos");

  // Contenedor donde están todas las tarjetas de producto
  const catalogGrid = document.querySelector(".catalog-grid");

  // Todas las tarjetas del catálogo
  const allCards = Array.from(document.querySelectorAll(".catalog-card"));

  // Array que guarda los filtros activos en el orden en que el usuario los selecciona
  let activeFilters = [];

  // Se guarda el texto original de cada botón para luego restaurarlo
  filterButtons.forEach((button) => {
    button.dataset.originalText = button.textContent.trim();
  });

  // Función para normalizar texto y compararlo mejor
  function normalizeText(text) {
    return text.trim().toLowerCase();
  }

  // Función para activar visualmente el botón "Todos"
  function activateAllButton() {
    if (!allButton) return;

    allButton.classList.add("active");
    allButton.setAttribute("aria-pressed", "true");
  }

  // Función para desactivar visualmente el botón "Todos"
  function deactivateAllButton() {
    if (!allButton) return;

    allButton.classList.remove("active");
    allButton.setAttribute("aria-pressed", "false");
  }

  // Función para actualizar el texto y aspecto de los botones de categoría
  function updateButtonsUI() {
    filterButtons.forEach((button) => {
      const filterName = normalizeText(button.dataset.originalText);
      const isActive = activeFilters.includes(filterName);

      if (isActive) {
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        button.textContent = `${button.dataset.originalText} ×`;
      } else {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
        button.textContent = button.dataset.originalText;
      }
    });

    // Si no hay filtros activos, "Todos" queda activo
    if (activeFilters.length === 0) {
      activateAllButton();
    } else {
      deactivateAllButton();
    }
  }

  // Función para mostrar todas las tarjetas en su orden original
  function showAllCards() {
    allCards.forEach((card) => {
      card.style.display = "";
      catalogGrid.appendChild(card);
    });
  }

  // Función para aplicar filtros y reordenar productos según el orden de selección
  function applyFilters() {
    // Si no hay filtros activos, se muestran todos los productos
    if (activeFilters.length === 0) {
      showAllCards();
      updateButtonsUI();
      return;
    }

    // Ocultamos todas las tarjetas primero
    allCards.forEach((card) => {
      card.style.display = "none";
    });

    // Recorremos los filtros activos en el orden en que fueron seleccionados
    activeFilters.forEach((filter) => {
      allCards.forEach((card) => {
        const category = normalizeText(card.dataset.category || "");

        // Si la tarjeta pertenece al filtro actual, la mostramos y la movemos al final
        // del contenedor. Así se respeta el orden elegido por el usuario.
        if (category === filter) {
          card.style.display = "";
          catalogGrid.appendChild(card);
        }
      });
    });

    updateButtonsUI();
  }

  // Evento del botón "Todos"
  if (allButton) {
    allButton.addEventListener("click", () => {
      // Al pulsar "Todos" se limpian todos los filtros
      activeFilters = [];
      applyFilters();
    });
  }

  // Evento para cada botón de categoría
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterName = normalizeText(button.dataset.originalText);
      const existingIndex = activeFilters.indexOf(filterName);

      // Si ya estaba activo, se elimina
      if (existingIndex !== -1) {
        activeFilters.splice(existingIndex, 1);
      } else {
        // Si no estaba activo, se añade al final
        activeFilters.push(filterName);
      }

      applyFilters();
    });
  });

  // Estado inicial al cargar la página
  activateAllButton();
  showAllCards();
  updateButtonsUI();
});