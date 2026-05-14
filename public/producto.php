<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$pdo = require __DIR__ . '/../config/db.php';

/* =========================
   1. Recoger slug de la URL
   ========================= */
$slug = $_GET['slug'] ?? null;

if (!$slug) {
    die('Producto no especificado');
}

/* =========================
   2. Buscar producto principal
   ========================= */
$sql = "SELECT * FROM productos WHERE slug = :slug AND activo = 1 LIMIT 1";
$stmt = $pdo->prepare($sql);
$stmt->execute(['slug' => $slug]);

$producto = $stmt->fetch();

if (!$producto) {
    die('Producto no encontrado');
}

/* =========================
   3. Preparar datos visuales
   ========================= */

/* Imagen principal
   Aquí asumimos que en la BD guardas algo tipo:
   cookies/lotus_cookies_1.jpg
   cupcakes/choco_cupcakes_1.png
*/
$imagenPrincipal = 'img/catalogo/' . $producto['imagen_principal'];

/* Categoría en mayúsculas para el diseño */
$categoriaVisual = strtoupper($producto['categoria']);

/* Precio bonito */
$precioFormateado = number_format((float)$producto['precio_base'], 2, ',', '.');

/* Unidad texto */
$unidadTexto = $producto['unidad_texto'] ?? '';

/* Subtotal inicial (cantidad = 1) */
$subtotalInicial = $precioFormateado . '€';

/* Nota de precio simple por ahora */
$notaPrecio = 'Precio base. IVA incluido.';

/* Promo temporal hasta conectar tabla producto_promociones */
$mostrarPromo = false;
$promoTitulo = '';
$promoTexto = '';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title><?php echo htmlspecialchars($producto['nombre']); ?> | Le Jardin de Berry</title>
  <meta
    name="description"
    content="Descubre <?php echo htmlspecialchars($producto['nombre']); ?> en Le Jardin de Berry: descripción, precio y detalles principales del producto."
  />

  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/producto.css" />

  <link rel="icon" type="image/png" href="img/homepage/favicon/favicon.png" />
</head>
<body>

  <!-- Header / Cabecera principal -->
  <header class="site-header">
    <div class="container header-container">

      <a href="index.html" class="logo">Le Jardin de Berry</a>

      <nav class="main-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="catalogo.php" class="active">Catálogo</a></li>
          <li><a href="encargos.html">Encargos</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>

      <div class="header-icons">
        <a href="login.html" class="icon-link" aria-label="Ir a la cuenta">
          <img src="img/icons/user.png" alt="Cuenta" />
        </a>
        <a href="carrito.html" class="icon-link" aria-label="Ir al carrito">
          <img src="img/icons/cart.png" alt="Carrito" />
        </a>
      </div>

    </div>
  </header>

  <main>

    <!-- Estado del producto -->
    <section class="product-status-section">
      <div class="container">
        <p id="product-status" class="product-status" aria-live="polite"></p>
      </div>
    </section>

    <!-- Sección principal del producto -->
    <section class="product-detail">
      <div class="container">

        <a href="catalogo.php" class="back-link">← Volver al catálogo</a>

        <div class="product-detail-container">

          <!-- Columna visual -->
          <div class="product-gallery">

            <div class="product-image-wrapper">
              <img
                src="<?php echo htmlspecialchars($imagenPrincipal); ?>"
                alt="<?php echo htmlspecialchars($producto['nombre']); ?>"
                class="product-main-image"
                id="product-image"
              />
            </div>

            <!-- Miniaturas: de momento vacías hasta conectar producto_imagenes -->
            <div
              class="product-thumbnails"
              id="product-thumbnails"
              aria-label="Galería de imágenes del producto"
            >
            </div>

          </div>

          <!-- Columna de información -->
          <div class="product-info">

            <section class="product-purchase-card" aria-label="Opciones de compra del producto">

              <div class="product-card-header">
                <p class="product-category" id="product-category">
                  <?php echo htmlspecialchars($categoriaVisual); ?>
                </p>

                <h1 id="product-name">
                  <?php echo htmlspecialchars($producto['nombre']); ?>
                </h1>

                <p class="product-description" id="product-description">
                  <?php echo htmlspecialchars($producto['descripcion_larga']); ?>
                </p>
              </div>

              <!-- Precio -->
              <div class="product-price-card">
                <div class="price-main-line">
                  <span class="product-price" id="product-price">
                    <?php echo $precioFormateado; ?>€
                  </span>

                  <span class="price-unit" id="product-price-unit">
                    <?php echo htmlspecialchars($unidadTexto); ?>
                  </span>
                </div>

                <p class="price-note" id="product-price-note">
                  <?php echo htmlspecialchars($notaPrecio); ?>
                </p>

                <?php if ($mostrarPromo): ?>
                  <div class="promo-box" id="product-promo-box">
                    <p class="promo-label">Promoción por cantidad</p>
                    <p class="promo-title" id="product-promo-title">
                      <?php echo htmlspecialchars($promoTitulo); ?>
                    </p>
                    <p class="promo-text" id="product-promo-text">
                      <?php echo htmlspecialchars($promoTexto); ?>
                    </p>
                  </div>
                <?php endif; ?>
              </div>

              <!-- Formato: temporal hasta conectar producto_formatos -->
              <div class="option-row">
                <label for="product-format" class="sr-only">Selecciona el formato</label>
                <select id="product-format" class="product-option-select" aria-label="Selecciona el formato">
                  <option selected>
                    <?php echo htmlspecialchars($unidadTexto !== '' ? $unidadTexto : 'Formato único'); ?>
                  </option>
                </select>
              </div>

              <!-- Compra -->
              <div class="product-purchase" aria-label="Selección de cantidad y compra">
                <div class="product-purchase-controls">

                  <div class="quantity-selector" aria-label="Selector de cantidad">
                    <button
                      type="button"
                      class="quantity-btn"
                      id="decrease-quantity"
                      aria-label="Restar cantidad"
                    >
                      −
                    </button>

                    <span
                      class="quantity-value"
                      id="product-quantity"
                      aria-live="polite"
                    >
                      1
                    </span>

                    <button
                      type="button"
                      class="quantity-btn"
                      id="increase-quantity"
                      aria-label="Sumar cantidad"
                    >
                      +
                    </button>
                  </div>

                  <button type="button" class="add-cart-btn" id="add-to-cart-btn">
                    Añadir al carrito
                  </button>

                </div>
              </div>

              <!-- Subtotal -->
              <div class="subtotal-box">
                <p class="subtotal-label">Subtotal actual</p>
                <p class="subtotal-value" id="product-subtotal">
                  <?php echo $subtotalInicial; ?>
                </p>
              </div>

              <!-- Tarjetas de confianza -->
              <div class="purchase-benefits-grid">

                <article class="purchase-benefit-card">
                  <h3>Envío local</h3>
                  <p>Franja de entrega seleccionable.</p>
                </article>

                <article class="purchase-benefit-card">
                  <h3>Pago seguro</h3>
                  <p>Tarjeta, Bizum y efectivo.</p>
                </article>

                <article class="purchase-benefit-card">
                  <h3>Recogida en tienda</h3>
                  <p>Disponible sin coste adicional.</p>
                </article>

              </div>

            </section>

          </div>

        </div>

      </div>
    </section>

    <!-- Información detallada del producto -->
    <section class="product-extra-info">
      <div class="container">

        <div class="product-info-wrapper">

          <article class="product-extra-info-card">
            <p class="section-label">INGREDIENTES, ALÉRGENOS Y CONSERVACIÓN</p>
            <h2>Información detallada del producto</h2>
            <p>
              En esta sección puedes consultar los ingredientes, alérgenos y recomendaciones de conservación del producto.
            </p>

            <div class="product-info-grid">

              <article class="info-box">
                <h3>Ingredientes principales</h3>
                <ul id="product-ingredients"></ul>
              </article>

              <article class="info-box">
                <h3>Información sobre alérgenos</h3>
                <ul id="product-allergens"></ul>
              </article>

              <article class="info-box">
                <h3>Elaboración y conservación</h3>
                <p id="product-extra-text"></p>
              </article>

            </div>
          </article>

          <article class="special-options-card">
            <span class="section-label">Versiones adaptadas</span>
            <h2>Opciones bajo encargo</h2>
            <p>
              Consulta disponibilidad según producto, fechas y tipo de elaboración.
            </p>

            <div class="special-options-grid">

              <article class="special-option">
                <div class="special-option-icon">
                  <img src="img/icons/gluten_free_icon.png" alt="Icono opción sin gluten" />
                </div>
                <h3>Sin gluten</h3>
                <p>
                  Opciones elaboradas bajo consulta previa para celebraciones
                  o pedidos personalizados.
                </p>
              </article>

              <article class="special-option">
                <div class="special-option-icon">
                  <img src="img/icons/lactose_free_icon.png" alt="Icono opción sin lactosa" />
                </div>
                <h3>Sin lactosa</h3>
                <p>
                  Algunas recetas pueden adaptarse con ingredientes alternativos
                  manteniendo el sabor y la textura.
                </p>
              </article>

              <article class="special-option">
                <div class="special-option-icon">
                  <img src="img/icons/vegan_icon.png" alt="Icono opción vegana" />
                </div>
                <h3>Vegano</h3>
                <p>
                  Disponemos de selecciones adaptadas con opciones vegetales
                  para encargos concretos.
                </p>
              </article>

            </div>
          </article>

          <div class="product-info-note">
            <p>
              * Las opciones sin gluten, sin lactosa o veganas están sujetas a disponibilidad
              y al tipo de producto.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- Opiniones destacadas -->
    <section class="product-reviews-section">
      <div class="container">
        <div class="product-section-wrapper">
          <div class="product-section-inner">

            <div class="product-section-heading">
              <p class="section-label">VALORACIONES</p>
              <h2>Opiniones destacadas</h2>
              <p>
                Una pequeña selección de reseñas relacionadas con este tipo de producto.
              </p>
            </div>

            <div
              class="product-reviews-grid"
              id="product-reviews-container"
              aria-label="Opiniones destacadas del producto"
            >
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Productos relacionados -->
    <section class="related-products-section">
      <div class="container">
        <div class="product-section-wrapper">
          <div class="product-section-inner">

            <div class="product-section-heading">
              <p class="section-label">DESCUBRE MÁS</p>
              <h2>Productos relacionados</h2>
              <p>
                Otras propuestas de la misma colección que pueden interesarte.
              </p>
            </div>

            <div
              class="related-products-grid"
              id="related-products-container"
              aria-label="Productos relacionados"
            >
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Preguntas frecuentes -->
    <section class="product-faq-section">
      <div class="container">
        <div class="product-section-wrapper">
          <div class="product-section-inner">

            <div class="product-section-heading">
              <p class="section-label">PREGUNTAS FRECUENTES</p>
              <h2>Antes de hacer tu pedido</h2>
              <p>
                Resolvemos algunas dudas habituales sobre conservación, encargos y recogida.
              </p>
            </div>

            <div
              class="product-faq-list"
              id="product-faq-container"
              aria-label="Preguntas frecuentes del producto"
            >
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Form novedades -->
    <section class="newsletter-cta">
      <div class="container">
        <div class="newsletter-cta-box">
          <div class="newsletter-cta-content">
            <p class="newsletter-cta-label">Novedades</p>
            <h2 class="newsletter-cta-title">Sé el primero en enterarte de nuestras novedades más deliciosas</h2>
            <p class="newsletter-cta-text">
              Promos especiales, lanzamientos de temporada y preventas exclusivas.
            </p>
            <p class="newsletter-cta-text">
              Si te gusta lo bueno… aquí siempre habrá algo recién salido del horno.
            </p>
          </div>

          <form class="newsletter-cta-form" action="#" method="post">
            <label for="newsletter-email" class="sr-only">Tu correo electrónico</label>
            <input
              type="email"
              id="newsletter-email"
              class="newsletter-cta-input"
              placeholder="Tu correo electrónico"
            />
            <button type="submit" class="newsletter-cta-button">
              Quiero recibir novedades
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-container">
      <p>© 2026 Le Jardin de Berry. Todos los derechos reservados.</p>

      <div class="footer-links">
        <a href="index.html">Inicio</a>
        <a href="catalogo.php">Catálogo</a>
        <a href="encargos.html">Encargos</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/opinion_datos.js"></script>
  <script src="js/faq_datos.js"></script>
</body>
</html>