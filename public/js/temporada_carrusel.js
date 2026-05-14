/// Seasonal carousel
// TODO v2: replace local seasonalProducts array with data from PHP/MySQL endpoint.

document.addEventListener("DOMContentLoaded", () => {
  const seasonalProducts = [
    {
      title: "Cheesecake de fresa",
      image: "img/homepage/seasonal/strawberry_cheesecake.png",
      alt: "Cheesecake de fresa especial de primavera",
    },
    {
      title: "Tartaleta de frutas",
      image: "img/homepage/seasonal/fruit_tartlets.png",
      alt: "Tartaletas de frutas especiales de primavera con fresas, cerezas, uvas y arándanos",
    },
    {
      title: "Mochis de fresa",
      image: "img/homepage/seasonal/strawberry_mochi.png",
      alt: "Mochis de fresa especiales de primavera",
    },
  ];

  const section = document.querySelector(".seasonal-edition-section");

  if (!section || seasonalProducts.length === 0) {
    return;
  }

  const imageBox = section.querySelector(".seasonal-edition-image-box");
  const image = section.querySelector(".seasonal-edition-image");
  const prevButton = section.querySelector(".seasonal-edition-arrow--prev");
  const nextButton = section.querySelector(".seasonal-edition-arrow--next");
  const dotsContainer = section.querySelector(".seasonal-edition-dots");

  if (!imageBox || !image || !dotsContainer) {
    return;
  }

  let currentIndex = 0;
  let autoplayId = null;
  const autoplayTime = 5000;

  function renderDots() {
    dotsContainer.innerHTML = "";

    seasonalProducts.forEach((product, index) => {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.className = "seasonal-edition-dot";
      dot.setAttribute("aria-label", `Ver ${product.title}`);

      if (index === currentIndex) {
        dot.classList.add("seasonal-edition-dot--active");
        dot.setAttribute("aria-current", "true");
      }

      dot.addEventListener("click", () => {
        showProduct(index);
        restartAutoplay();
      });

      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".seasonal-edition-dot");

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;

      dot.classList.toggle("seasonal-edition-dot--active", isActive);

      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }

  function showProduct(index) {
    currentIndex = (index + seasonalProducts.length) % seasonalProducts.length;

    const currentProduct = seasonalProducts[currentIndex];

    image.src = currentProduct.image;
    image.alt = currentProduct.alt;

    updateDots();
  }

  function showNextProduct() {
    showProduct(currentIndex + 1);
  }

  function showPrevProduct() {
    showProduct(currentIndex - 1);
  }

  function startAutoplay() {
    if (seasonalProducts.length <= 1 || autoplayId !== null) {
      return;
    }

    autoplayId = setInterval(() => {
      showNextProduct();
    }, autoplayTime);
  }

  function stopAutoplay() {
    if (autoplayId !== null) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      showPrevProduct();
      restartAutoplay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showNextProduct();
      restartAutoplay();
    });
  }

  imageBox.addEventListener("mouseenter", () => {
    stopAutoplay();
  });

  imageBox.addEventListener("mouseleave", () => {
    startAutoplay();
  });

  renderDots();
  showProduct(currentIndex);
  startAutoplay();
});