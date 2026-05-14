<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$pdo = require __DIR__ . '/../config/db.php';

// Obtener productos
$stmt = $pdo->query("SELECT * FROM productos WHERE activo = 1");
$productos = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <!-- Meta básicos -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO -->
  <title>Catálogo | Le Jardin de Berry</title>
  <meta
    name="description"
    content="Explora el catálogo de Le Jardin de Berry con berlinas, cupcakes, galletas, macarons, mochis y pasteles artesanales."
  />

  <!-- Hojas de estilo -->
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="stylesheet" href="css/catalogo.css" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="img/homepage/favicon/favicon.png" />
</head>
<body>

  <!-- Header / Cabecera principal -->
  <header class="site-header">
    <div class="container header-container">

      <!-- Logo -->
      <a href="index.html" class="logo">Le Jardin de Berry</a>

      <!-- Navegación principal -->
      <nav class="main-nav" aria-label="Navegación principal">
        <ul class="nav-list">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="catalogo.html" class="active" aria-current="page">Catálogo</a></li>
          <li><a href="encargos.html">Encargos</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>

      <!-- Iconos de usuario y carrito -->
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

  <!-- Contenido principal -->
  <main>

    <!-- Hero del catálogo -->
    <section class="catalog-hero">
      <div class="container catalog-hero-content">
        <p class="catalog-brand-name">Le Jardin de Berry</p>
        <p class="section-label">CATÁLOGO</p>
        <h1>Nuestras creaciones</h1>
        <p class="catalog-subtitle">
          Descubre nuestra selección de berlinas, cupcakes y otras elaboraciones
          artesanales preparadas con mimo e ingredientes de calidad.
        </p>
      </div>
    </section>

    <!-- Filtros del catálogo -->
    <section class="catalog-filters-section">
      <div class="container">
        <div class="catalog-filters">
          <button class="filter-btn active" type="button" aria-pressed="true">Todos</button>
          <button class="filter-btn" type="button" aria-pressed="false">Berlinas</button>
          <button class="filter-btn" type="button" aria-pressed="false">Cupcakes</button>
          <button class="filter-btn" type="button" aria-pressed="false">Cookies</button>
          <button class="filter-btn" type="button" aria-pressed="false">Macarons</button>
          <button class="filter-btn" type="button" aria-pressed="false">Mochis</button>
          <button class="filter-btn" type="button" aria-pressed="false">Pasteles</button>
        </div>
      </div>
    </section>

    <!-- Productos del catálogo -->
    <section class="catalog-products">
      <div class="container">
        <div class="catalog-grid">

          <?php foreach ($productos as $producto): ?>

            <article class="catalog-card" data-category="<?php echo htmlspecialchars($producto['categoria']); ?>">

              <img src="img/catalogo/<?php echo htmlspecialchars($producto['imagen_principal']); ?>" 
                  alt="<?php echo htmlspecialchars($producto['nombre']); ?>" />

              <div class="catalog-card-body">
                <h3><?php echo htmlspecialchars($producto['nombre']); ?></h3>

                <p><?php echo htmlspecialchars($producto['descripcion_corta']); ?></p>

                <span class="price-tag">
                  Desde <?php echo number_format($producto['precio_base'], 2, ',', '.'); ?>€ 
                  <?php echo htmlspecialchars($producto['unidad_texto'] ?? ''); ?>
                </span>

                <a href="producto.php?slug=<?php echo urlencode($producto['slug']); ?>" 
                  class="btn-outline">
                  Ver producto
                </a>
              </div>

            </article>

          <?php endforeach; ?>

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

  <!-- Footer / Pie de página -->
  <footer class="site-footer">
    <div class="container footer-container">
      <p>© 2026 Le Jardin de Berry. Todos los derechos reservados.</p>

      <!-- Enlaces del footer -->
      <div class="footer-links">
        <a href="index.html">Inicio</a>
        <a href="catalogo.html">Catálogo</a>
        <a href="encargos.html">Encargos</a>
        <a href="contacto.html">Contacto</a>
      </div>
    </div>
  </footer>

  <!-- Scripts del catálogo -->
  <script src="js/catalogo_filtros.js"></script>
</body>
</html>
