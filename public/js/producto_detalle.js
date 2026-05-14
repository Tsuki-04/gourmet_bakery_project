/* ===========================================================
                    DETALLE DE PRODUCTO
   ===========================================================
   Este script:
   1. Lee el parámetro "id" de la URL
   2. Busca el producto correspondiente en el array "productos"
   3. Rellena la plantilla producto.html con sus datos
   4. Genera los formatos disponibles dinámicamente
   5. Calcula el subtotal según formato y cantidad
   6. Permite añadir el producto al carrito
*/

/* =========================================================
            OBTENER ID DEL PRODUCTO DESDE LA URL
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const idProducto = params.get("id");

/* =========================================================
                BUSCAR PRODUCTO EN EL ARRAY
   ========================================================= */

const producto =
  typeof productos !== "undefined" && Array.isArray(productos)
    ? productos.find(item => item.id === idProducto)
    : null;

/* =========================================================
            FUNCIÓN PARA FORMATEAR EL PRECIO
   ========================================================= */

function formatearPrecio(precio) {
  if (typeof precio !== "number" || isNaN(precio)) return "";
  return precio.toFixed(2).replace(".", ",") + "€";
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL PRECIO BASE DEL PRODUCTO
   ========================================================= */

function obtenerPrecioBaseProducto(producto) {
  if (!producto) return 0;

  if (typeof producto.precioBase === "number" && !isNaN(producto.precioBase)) {
    return producto.precioBase;
  }

  if (typeof producto.precio === "number" && !isNaN(producto.precio)) {
    return producto.precio;
  }

  return 0;
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL FORMATO POR DEFECTO
   ========================================================= */

function obtenerFormatoSeleccionado(producto) {
  if (!producto || !Array.isArray(producto.formatos) || producto.formatos.length === 0) {
    return null;
  }

  const formatoMarcado = producto.formatos.find(formato => formato.seleccionado === true);

  return formatoMarcado || producto.formatos[0];
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL FORMATO ACTUAL
   ========================================================= */

function obtenerFormatoActual(producto, selectFormato) {
  if (!producto) return null;

  if (Array.isArray(producto.formatos) && producto.formatos.length > 0 && selectFormato) {
    const indiceFormato = parseInt(selectFormato.value, 10);
    return producto.formatos[indiceFormato] || null;
  }

  return null;
}

/* =========================================================
        FUNCIÓN PARA CALCULAR EL PRECIO FINAL DEL FORMATO
   ========================================================= */

function calcularPrecioFormato(precioBase, formato) {
  if (typeof precioBase !== "number" || isNaN(precioBase) || !formato) return 0;

  const cantidad = typeof formato.cantidad === "number" ? formato.cantidad : 1;
  const descuento = typeof formato.descuento === "number" ? formato.descuento : 0;

  const precioSinDescuento = precioBase * cantidad;
  const precioFinal = precioSinDescuento * (1 - descuento / 100);

  return precioFinal;
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL PRECIO VISIBLE DEL PRODUCTO
   ========================================================= */

function obtenerPrecioVisibleProducto(producto) {
  const precioBase = obtenerPrecioBaseProducto(producto);

  if (Array.isArray(producto?.formatos) && producto.formatos.length > 0) {
    const formatoInicial = obtenerFormatoSeleccionado(producto);
    return calcularPrecioFormato(precioBase, formatoInicial);
  }

  return precioBase;
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL TEXTO VISIBLE DEL FORMATO
   ========================================================= */

function obtenerTextoFormatoVisible(producto) {
  if (!producto) return "";

  if (Array.isArray(producto.formatos) && producto.formatos.length > 0) {
    const formatoInicial = obtenerFormatoSeleccionado(producto);
    return formatoInicial?.nombre || "";
  }

  return producto.formato || "";
}

/* =========================================================
        FUNCIÓN PARA CREAR EL TEXTO DE CADA FORMATO
   ========================================================= */

function crearTextoFormato(formato) {
  if (!formato || !formato.nombre) return "Formato disponible";

  if (typeof formato.descuento === "number" && formato.descuento > 0) {
    return `${formato.nombre} (-${formato.descuento}%)`;
  }

  return formato.nombre;
}

/* =========================================================
                FUNCIÓN PARA PINTAR LISTAS
   ========================================================= */

function pintarLista(idElemento, arrayDatos) {
  const contenedor = document.getElementById(idElemento);

  if (!contenedor || !Array.isArray(arrayDatos)) return;

  contenedor.innerHTML = "";

  arrayDatos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

/* =========================================================
        FUNCIÓN PARA OBTENER LA IMAGEN PRINCIPAL
   ========================================================= */

function obtenerImagenPrincipalProducto(producto) {
  if (!producto) {
    return {
      src: "",
      alt: "Imagen del producto"
    };
  }

  if (Array.isArray(producto.galeria) && producto.galeria.length > 0) {
    return {
      src: producto.galeria[0].src || "",
      alt: producto.galeria[0].alt || producto.nombre || "Imagen del producto"
    };
  }

  return {
    src: producto.imagen || "",
    alt: producto.alt || producto.nombre || "Imagen del producto"
  };
}

/* =========================================================
        FUNCIÓN PARA OBTENER LA IMAGEN DE TARJETA
   ========================================================= */

function obtenerImagenTarjetaProducto(producto) {
  if (!producto) {
    return {
      src: "",
      alt: "Imagen del producto"
    };
  }

  if (Array.isArray(producto.galeria) && producto.galeria.length > 0) {
    return {
      src: producto.galeria[0].src || "",
      alt: producto.galeria[0].alt || producto.nombre || "Imagen del producto"
    };
  }

  return {
    src: producto.imagen || "",
    alt: producto.alt || producto.nombre || "Imagen del producto"
  };
}

/* =========================================================
        FUNCIÓN PARA PINTAR LA IMAGEN PRINCIPAL
   ========================================================= */

function pintarImagenPrincipal(producto) {
  const productImage = document.getElementById("product-image");

  if (!productImage) return;

  const imagenPrincipal = obtenerImagenPrincipalProducto(producto);

  productImage.src = imagenPrincipal.src;
  productImage.alt = imagenPrincipal.alt;
}

/* =========================================================
        FUNCIÓN PARA PINTAR LA GALERÍA DEL PRODUCTO
   ========================================================= */

function pintarGaleriaProducto(producto) {
  const productImage = document.getElementById("product-image");
  const thumbnailsContainer = document.getElementById("product-thumbnails");

  if (!productImage || !thumbnailsContainer) return;

  thumbnailsContainer.innerHTML = "";

  if (!Array.isArray(producto.galeria) || producto.galeria.length === 0) {
    return;
  }

  producto.galeria.forEach((imagen, index) => {
    const thumbnailButton = document.createElement("button");
    thumbnailButton.type = "button";
    thumbnailButton.className = "product-thumbnail";
    thumbnailButton.setAttribute(
      "aria-label",
      `Ver imagen ${index + 1} de ${producto.nombre || "este producto"}`
    );

    if (index === 0) {
      thumbnailButton.classList.add("active");
    }

    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = imagen.src || "";
    thumbnailImage.alt = imagen.alt || `Vista ${index + 1} de ${producto.nombre || "este producto"}`;

    thumbnailButton.appendChild(thumbnailImage);

    thumbnailButton.addEventListener("click", function () {
      productImage.src = imagen.src || "";
      productImage.alt = imagen.alt || producto.nombre || "Imagen del producto";

      const todasLasMiniaturas = thumbnailsContainer.querySelectorAll(".product-thumbnail");
      todasLasMiniaturas.forEach(item => item.classList.remove("active"));

      thumbnailButton.classList.add("active");
    });

    thumbnailsContainer.appendChild(thumbnailButton);
  });
}

/* =========================================================
        FUNCIÓN PARA ACTUALIZAR EL SUBTOTAL
   ========================================================= */

function actualizarSubtotal(producto, selectFormato, cantidad, elementoSubtotal) {
  if (!producto || !elementoSubtotal) return;

  const precioBase = obtenerPrecioBaseProducto(producto);
  let subtotal = precioBase * cantidad;

  if (Array.isArray(producto.formatos) && producto.formatos.length > 0 && selectFormato) {
    const formatoSeleccionado = obtenerFormatoActual(producto, selectFormato);

    if (formatoSeleccionado) {
      const precioFormato = calcularPrecioFormato(precioBase, formatoSeleccionado);
      subtotal = precioFormato * cantidad;
    }
  } else {
    subtotal = precioBase * cantidad;
  }

  elementoSubtotal.textContent = formatearPrecio(subtotal);
}

/* =========================================================
        FUNCIÓN PARA MOSTRAR LA CANTIDAD EN PANTALLA
   ========================================================= */

function actualizarCantidadVisual(elementoCantidad, cantidad) {
  if (!elementoCantidad) return;
  elementoCantidad.textContent = cantidad;
}

/* =========================================================
        FUNCIÓN PARA CREAR EL ITEM DEL CARRITO
   ========================================================= */

function crearItemCarrito(producto, selectFormato, cantidadPacks) {
  const precioBase = obtenerPrecioBaseProducto(producto);

  let formatoNombre = producto.formato || "Formato único";
  let unidadesPorFormato = 1;
  let descuentoFormato = 0;
  let precioPorPack = precioBase;

  if (Array.isArray(producto.formatos) && producto.formatos.length > 0 && selectFormato) {
    const formatoSeleccionado = obtenerFormatoActual(producto, selectFormato);

    if (formatoSeleccionado) {
      formatoNombre = formatoSeleccionado.nombre || "Formato disponible";
      unidadesPorFormato = typeof formatoSeleccionado.cantidad === "number" ? formatoSeleccionado.cantidad : 1;
      descuentoFormato = typeof formatoSeleccionado.descuento === "number" ? formatoSeleccionado.descuento : 0;
      precioPorPack = calcularPrecioFormato(precioBase, formatoSeleccionado);
    }
  }

  const unidadesTotales = unidadesPorFormato * cantidadPacks;
  const subtotal = precioPorPack * cantidadPacks;

  return {
    id: producto.id,
    nombre: producto.nombre,
    grupo: producto.grupo || "",
    categoria: producto.categoria || "",
    imagen: obtenerImagenPrincipalProducto(producto).src,

    formato: formatoNombre,
    cantidad: cantidadPacks, // cantidad de packs o formatos seleccionados
    cantidadPacks: cantidadPacks,

    unidadesPorFormato: unidadesPorFormato,
    unidadesPorPack: unidadesPorFormato,
    unidadesTotales: unidadesTotales,

    descuento: descuentoFormato,

    precioUnitarioBase: precioBase,
    precioUnidad: precioBase,
    precioFormato: precioPorPack,
    precioPack: precioPorPack,

    subtotal: subtotal,

    unidadTexto: producto.unidadTexto || "",
    notaPrecio: producto.notaPrecio || ""
  };
}

/* =========================================================
        FUNCIÓN PARA GUARDAR EN EL CARRITO
   ========================================================= */

function guardarEnCarrito(item) {
  let carritoActual = [];

  try {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    carritoActual = Array.isArray(carritoGuardado) ? carritoGuardado : [];
  } catch (error) {
    carritoActual = [];
  }

  carritoActual.push(item);
  localStorage.setItem("carrito", JSON.stringify(carritoActual));
}

/* =========================================================
        FUNCIÓN PARA OBTENER ELEMENTOS ALEATORIOS
   ========================================================= */

function obtenerElementosAleatorios(array, cantidad) {
  if (!Array.isArray(array) || array.length === 0) return [];

  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia.slice(0, cantidad);
}

/* =========================================================
        FUNCIÓN PARA GENERAR ESTRELLAS VISUALES
   ========================================================= */

function generarEstrellas(num) {
  const valorNumerico = Number(num);
  const valor = Math.max(0, Math.min(5, Math.round(valorNumerico) || 0));

  const llenas = "★".repeat(valor);
  const vacias = "☆".repeat(5 - valor);

  return llenas + vacias;
}

/* =========================================================
        FUNCIÓN PARA OBTENER OPINIONES DEL PRODUCTO
   ========================================================= */

function obtenerOpinionesParaProducto(producto) {
  if (!producto || typeof opiniones === "undefined" || !Array.isArray(opiniones)) {
    return [];
  }

  const opinionesDelProducto = opiniones.filter(opinion => opinion.productoId === producto.id);

  const opinionesDelGrupo = opiniones.filter(opinion =>
    opinion.grupo === producto.grupo && opinion.productoId !== producto.id
  );

  const opinionesCombinadas = [...opinionesDelProducto, ...opinionesDelGrupo];

  return obtenerElementosAleatorios(opinionesCombinadas, 3);
}

/* =========================================================
        FUNCIÓN PARA OBTENER EL PRODUCTO DE CADA OPINIÓN
   ========================================================= */

function obtenerNombreProductoDesdeOpinion(opinion) {
  if (
    !opinion ||
    !opinion.productoId ||
    typeof productos === "undefined" ||
    !Array.isArray(productos)
  ) {
    return "";
  }

  const productoRelacionado = productos.find(item => item.id === opinion.productoId);

  return productoRelacionado ? productoRelacionado.nombre : "";
}

/* =========================================================
        FUNCIÓN PARA PINTAR OPINIONES DESTACADAS
   ========================================================= */

function pintarOpinionesDestacadas(producto) {
  const contenedor = document.getElementById("product-reviews-container");

  if (!contenedor) return;

  const opinionesMostradas = obtenerOpinionesParaProducto(producto);

  contenedor.innerHTML = "";

  if (opinionesMostradas.length === 0) {
    const textoVacio = document.createElement("p");
    textoVacio.className = "empty-section-text";
    textoVacio.textContent = "Todavía no hay opiniones disponibles para este producto.";
    contenedor.appendChild(textoVacio);
    return;
  }

  opinionesMostradas.forEach(opinion => {
    const article = document.createElement("article");
    article.className = "review-card";

    const estrellas = document.createElement("div");
    estrellas.className = "review-stars";
    estrellas.setAttribute("aria-label", `${opinion.estrellas} de 5 estrellas`);
    estrellas.textContent = generarEstrellas(opinion.estrellas);

    const texto = document.createElement("p");
    texto.className = "review-text";
    texto.textContent = `“${opinion.texto || ""}”`;

    const autor = document.createElement("p");
    autor.className = "review-author";
    autor.textContent = opinion.autor || "";

    const nombreProducto = document.createElement("p");
    nombreProducto.className = "review-product-name";
    nombreProducto.textContent = obtenerNombreProductoDesdeOpinion(opinion);

    article.appendChild(estrellas);
    article.appendChild(texto);
    article.appendChild(autor);
    article.appendChild(nombreProducto);

    contenedor.appendChild(article);
  });
}

/* =========================================================
        FUNCIÓN PARA OBTENER PRODUCTOS RELACIONADOS
   ========================================================= */

function obtenerProductosRelacionados(producto) {
  if (!producto || typeof productos === "undefined" || !Array.isArray(productos)) {
    return [];
  }

  const relacionados = productos.filter(item =>
    item.grupo === producto.grupo && item.id !== producto.id
  );

  return obtenerElementosAleatorios(relacionados, 3);
}

/* =========================================================
        FUNCIÓN PARA PINTAR PRODUCTOS RELACIONADOS
   ========================================================= */

function pintarProductosRelacionados(producto) {
  const contenedor = document.getElementById("related-products-container");

  if (!contenedor) return;

  const relacionados = obtenerProductosRelacionados(producto);

  contenedor.innerHTML = "";

  if (relacionados.length === 0) {
    const textoVacio = document.createElement("p");
    textoVacio.className = "empty-section-text";
    textoVacio.textContent = "No hay productos relacionados disponibles en este momento.";
    contenedor.appendChild(textoVacio);
    return;
  }

  relacionados.forEach(item => {
    const article = document.createElement("article");
    article.className = "related-product-card";

    const imageLink = document.createElement("a");
    imageLink.href = `producto.html?id=${item.id}`;
    imageLink.className = "related-product-image-link";
    imageLink.setAttribute("aria-label", `Ver ${item.nombre || "producto"}`);

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "related-product-image-wrapper";

    const imagen = document.createElement("img");
    const imagenTarjeta = obtenerImagenTarjetaProducto(item);

    imagen.src = imagenTarjeta.src;
    imagen.alt = imagenTarjeta.alt;
    imagen.className = "related-product-image";

    imageWrapper.appendChild(imagen);
    imageLink.appendChild(imageWrapper);

    const content = document.createElement("div");
    content.className = "related-product-content";

    const header = document.createElement("div");
    header.className = "related-product-header";

    const textBlock = document.createElement("div");
    textBlock.className = "related-product-text-block";

    const categoria = document.createElement("p");
    categoria.className = "related-product-category";
    categoria.textContent = item.categoria || "";

    const titulo = document.createElement("h3");
    titulo.className = "related-product-title";
    titulo.textContent = item.nombre || "";

    textBlock.appendChild(categoria);
    textBlock.appendChild(titulo);

    const precio = document.createElement("p");
    precio.className = "related-product-price-badge";
    precio.textContent = formatearPrecio(obtenerPrecioVisibleProducto(item));

    header.appendChild(textBlock);
    header.appendChild(precio);

    const descripcion = document.createElement("p");
    descripcion.className = "related-product-description";
    descripcion.textContent = item.descripcion || "";

    const actions = document.createElement("div");
    actions.className = "related-product-actions";

    const viewBtn = document.createElement("a");
    viewBtn.href = `producto.html?id=${item.id}`;
    viewBtn.className = "related-product-view-btn";
    viewBtn.textContent = "Ver";

    const cartBtn = document.createElement("button");
    cartBtn.type = "button";
    cartBtn.className = "related-product-cart-btn";
    cartBtn.setAttribute("aria-label", `Añadir ${item.nombre || "producto"} al carrito`);

    const cartIcon = document.createElement("img");
    cartIcon.src = "img/icons/add_cart.png";
    cartIcon.alt = "";
    cartIcon.setAttribute("aria-hidden", "true");

    cartBtn.appendChild(cartIcon);

    actions.appendChild(viewBtn);
    actions.appendChild(cartBtn);

    content.appendChild(header);
    content.appendChild(descripcion);
    content.appendChild(actions);

    article.appendChild(imageLink);
    article.appendChild(content);

    contenedor.appendChild(article);
  });
}

/* =========================================================
        FUNCIÓN PARA OBTENER FAQS DEL PRODUCTO
   ========================================================= */

function obtenerFaqsParaProducto(producto) {
  if (
    !producto ||
    typeof preguntasFrecuentesPorGrupo === "undefined" ||
    typeof preguntasFrecuentesPorGrupo !== "object"
  ) {
    return [];
  }

  return Array.isArray(preguntasFrecuentesPorGrupo[producto.grupo])
    ? preguntasFrecuentesPorGrupo[producto.grupo]
    : [];
}

/* =========================================================
        FUNCIÓN PARA PINTAR PREGUNTAS FRECUENTES
   ========================================================= */

function pintarPreguntasFrecuentes(producto) {
  const contenedor = document.getElementById("product-faq-container");

  if (!contenedor) return;

  const faqs = obtenerElementosAleatorios(obtenerFaqsParaProducto(producto), 3);

  contenedor.innerHTML = "";

  if (faqs.length === 0) {
    const textoVacio = document.createElement("p");
    textoVacio.className = "empty-section-text";
    textoVacio.textContent = "No hay preguntas frecuentes disponibles para este producto.";
    contenedor.appendChild(textoVacio);
    return;
  }

  faqs.forEach(item => {
    const article = document.createElement("article");
    article.className = "faq-item";

    const pregunta = document.createElement("h3");
    pregunta.className = "faq-question";
    pregunta.textContent = item.pregunta || "";

    const respuesta = document.createElement("p");
    respuesta.className = "faq-answer";
    respuesta.textContent = item.respuesta || "";

    article.appendChild(pregunta);
    article.appendChild(respuesta);

    contenedor.appendChild(article);
  });
}

/* =========================================================
        FUNCIÓN PARA PINTAR LA PROMOCIÓN
   ========================================================= */

function pintarPromocion(producto) {
  const promoTitle = document.querySelector(".promo-title");
  const promoText = document.querySelector(".promo-text");
  const promoBox = document.querySelector(".promo-box");

  if (producto.promo && (producto.promo.titulo || producto.promo.texto)) {
    if (promoTitle) {
      promoTitle.textContent = producto.promo.titulo || "";
    }

    if (promoText) {
      promoText.textContent = producto.promo.texto || "";
    }

    if (promoBox) {
      promoBox.style.display = "";
    }
  } else {
    if (promoBox) {
      promoBox.style.display = "none";
    }

    if (promoTitle) {
      promoTitle.textContent = "";
    }

    if (promoText) {
      promoText.textContent = "";
    }
  }
}

/* =========================================================
        FUNCIÓN PARA MOSTRAR ERROR DE PRODUCTO
   ========================================================= */

function mostrarErrorProducto() {
  const contenedorPrincipal = document.querySelector(".product-detail");

  if (!contenedorPrincipal) return;

  contenedorPrincipal.innerHTML = "";

  const container = document.createElement("div");
  container.className = "container";

  const errorBox = document.createElement("div");
  errorBox.className = "product-error-message";

  const label = document.createElement("p");
  label.className = "section-label";
  label.textContent = "PRODUCTO NO ENCONTRADO";

  const title = document.createElement("h1");
  title.textContent = "Este producto no existe o no está disponible";

  const text = document.createElement("p");
  text.textContent = "Puede que el enlace sea incorrecto o que el producto todavía no esté añadido al catálogo dinámico.";

  const link = document.createElement("a");
  link.href = "catalogo.html";
  link.className = "back-link";
  link.textContent = "← Volver al catálogo";

  errorBox.appendChild(label);
  errorBox.appendChild(title);
  errorBox.appendChild(text);
  errorBox.appendChild(link);

  container.appendChild(errorBox);
  contenedorPrincipal.appendChild(container);
}

/* =========================================================
        SI EL PRODUCTO EXISTE, RELLENAR LA PLANTILLA
   ========================================================= */

if (producto) {
  /* Imagen principal */
  pintarImagenPrincipal(producto);

  /* Galería de imágenes */
  pintarGaleriaProducto(producto);

  /* Categoría */
  const productCategory = document.getElementById("product-category");
  if (productCategory) {
    productCategory.textContent = producto.categoria || "";
  }

  /* Nombre */
  const productName = document.getElementById("product-name");
  if (productName) {
    productName.textContent = producto.nombre || "";
  }

  /* Descripción */
  const productDescription = document.getElementById("product-description");
  if (productDescription) {
    productDescription.textContent = producto.descripcion || "";
  }

  /* Precio principal */
  const productPrice = document.getElementById("product-price");
  const precioInicialMostrado = obtenerPrecioVisibleProducto(producto);

  if (productPrice) {
    productPrice.textContent = formatearPrecio(precioInicialMostrado);
  }

  /* Unidad de precio */
  const priceUnit = document.querySelector(".price-unit");
  if (priceUnit) {
    priceUnit.textContent = producto.unidadTexto || "";
  }

  /* Cantidad */
  const decreaseQuantityButton = document.getElementById("decrease-quantity");
  const increaseQuantityButton = document.getElementById("increase-quantity");
  const productQuantity = document.getElementById("product-quantity");

  let cantidadActual = 1;
  const cantidadMaxima = 20;

  actualizarCantidadVisual(productQuantity, cantidadActual);

  /* Subtotal */
  const productSubtotal = document.getElementById("product-subtotal");

  /* Formato */
  const productFormat = document.getElementById("product-format");

  if (productFormat) {
    productFormat.innerHTML = "";

    if (Array.isArray(producto.formatos) && producto.formatos.length > 0) {
      const formatoInicial = obtenerFormatoSeleccionado(producto);

      producto.formatos.forEach((formato, index) => {
        const optionFormato = document.createElement("option");
        optionFormato.value = index;
        optionFormato.textContent = crearTextoFormato(formato);

        if (formato === formatoInicial) {
          optionFormato.selected = true;
        }

        productFormat.appendChild(optionFormato);
      });

      actualizarSubtotal(producto, productFormat, cantidadActual, productSubtotal);

      productFormat.addEventListener("change", function () {
        actualizarSubtotal(producto, productFormat, cantidadActual, productSubtotal);
      });
    } else {
      const optionFormato = document.createElement("option");
      optionFormato.value = "0";
      optionFormato.textContent = producto.formato || "Formato no disponible";
      optionFormato.selected = true;

      productFormat.appendChild(optionFormato);

      if (productSubtotal) {
        productSubtotal.textContent = formatearPrecio(obtenerPrecioBaseProducto(producto) * cantidadActual);
      }
    }
  } else {
    if (productSubtotal) {
      productSubtotal.textContent = formatearPrecio(obtenerPrecioBaseProducto(producto) * cantidadActual);
    }
  }

  /* Ingredientes */
  pintarLista("product-ingredients", producto.ingredientes);

  /* Alérgenos */
  pintarLista("product-allergens", producto.alergenos);

  /* Texto extra */
  const productExtraText = document.getElementById("product-extra-text");
  if (productExtraText) {
    productExtraText.textContent = producto.textoExtra || "";
  }

  /* Nota de precio */
  const priceNote = document.querySelector(".price-note");
  if (priceNote) {
    const formatoVisible = obtenerTextoFormatoVisible(producto);
    priceNote.textContent = producto.notaPrecio || (formatoVisible ? `Precio correspondiente a ${formatoVisible}.` : "");
  }

  /* Botones de cantidad */
  if (decreaseQuantityButton) {
    decreaseQuantityButton.addEventListener("click", function () {
      if (cantidadActual > 1) {
        cantidadActual--;
        actualizarCantidadVisual(productQuantity, cantidadActual);
        actualizarSubtotal(producto, productFormat, cantidadActual, productSubtotal);
      }
    });
  }

  if (increaseQuantityButton) {
    increaseQuantityButton.addEventListener("click", function () {
      if (cantidadActual < cantidadMaxima) {
        cantidadActual++;
        actualizarCantidadVisual(productQuantity, cantidadActual);
        actualizarSubtotal(producto, productFormat, cantidadActual, productSubtotal);
      }
    });
  }

  /* Promoción */
  pintarPromocion(producto);

  /* Opiniones destacadas */
  pintarOpinionesDestacadas(producto);

  /* Productos relacionados */
  pintarProductosRelacionados(producto);

  /* Preguntas frecuentes */
  pintarPreguntasFrecuentes(producto);

  /* Botón añadir al carrito */
  const addToCartButton = document.getElementById("add-to-cart-btn");

  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      const itemCarrito = crearItemCarrito(producto, productFormat, cantidadActual);
      guardarEnCarrito(itemCarrito);

      console.log("Producto añadido al carrito:", itemCarrito);
    });
  }

  /* Título del documento */
  document.title = `${producto.nombre || "Producto"} | Le Jardin de Berry`;
}

/* =========================================================
    SI EL PRODUCTO NO EXISTE, MOSTRAR MENSAJE DE ERROR
   ========================================================= */

else {
  mostrarErrorProducto();
  document.title = "Producto no encontrado | Le Jardin de Berry";
}