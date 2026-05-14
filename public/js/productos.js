/* =========================================================
   LISTA GLOBAL DE PRODUCTOS
   =========================================================
   Este archivo funciona como una pequeña base de datos en JS.
   Cada producto es un objeto dentro del array "productos".
   La página producto.html buscará el producto por su "id".
*/

const productos = [

  /* =========================================================
     BERLINAS
     ========================================================= */

  {
    id: "berlina-chocolate",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina de chocolate",
    descripcion: "Berlina de masa esponjosa rellena de una suave y cremosa crema de chocolate.",
    precioBase: 3.20,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/chocolate_doughnut_1.jpg",
        alt: "Vista principal de la berlina de chocolate"
      },
      {
        src: "img/catalogo/filled_doughnut/chocolate_doughnut_2.jpg",
        alt: "Pack de berlinas de chocolate"
      },
      {
        src: "img/catalogo/filled_doughnut/chocolate_doughnut_3.jpg",
        alt: "Berlinas de chocolate recién salidas del horno"
      }
    ],


    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa tierna elaborada con harina, huevo, leche, mantequilla y azúcar.",
      "Relleno cremoso de chocolate.",
      "Acabado con azúcar.",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "berlina-crema",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina de crema pastelera",
    descripcion: "Berlina de masa esponjosa rellena de una suave y cremosa crema pastelera.",
    precioBase: 3.00,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/cream_doughnut_1.jpg",
        alt: "Vista principal de la berlina de crema"
      },
      {
        src: "img/catalogo/filled_doughnut/cream_doughnut_2.jpg",
        alt: "Pack de berlinas de crema"
      },
      {
        src: "img/catalogo/filled_doughnut/cream_doughnut_3.jpg",
        alt: "Berlinas de crema recién salidas del horno"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa tierna elaborada con harina, huevo, leche, mantequilla y azúcar.",
      "Relleno de crema pastelera.",
      "Acabado con azúcar.",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "berlina-fresa",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina de fresa",
    descripcion: "Berlina de masa esponjosa rellena de una suave y afrutada crema de fresa.",
    precioBase: 3.00,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/jam_doughnut_1.png",
        alt: "Vista principal de la berlina de mermelada de fresa"
      },
      {
        src: "img/catalogo/filled_doughnut/jam_doughnut_2.jpg",
        alt: "Pack de berlinas de mermelada de fresa"
      },
      {
        src: "img/catalogo/filled_doughnut/jam_doughnut_3.jpg",
        alt: "Berlinas de mermelada de fresa recién salidas del horno"
      }
    ],
    
    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 8 y 10% en pack de 12."
    },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa tierna elaborada con harina, huevo, leche, mantequilla y azúcar.",
      "Relleno de mermelada de fresa artesanal.",
      "Acabado con azúcar.",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "berlina-pistacho",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina de pistacho",
    descripcion: "Berlina de masa esponjosa rellena de una suave y cremosa crema de pistacho.",
    precioBase: 3.60,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/pistachio_doughnut_1.png",
        alt: "Vista principal de la berlina de pistacho"
      },
      {
        src: "img/catalogo/filled_doughnut/pistachio_doughnut_2.jpg",
        alt: "Pack de berlinas de pistacho"
      },
      {
        src: "img/catalogo/filled_doughnut/pistachio_doughnut_3.jpg",
        alt: "Berlinas de pistacho recién salidas del horno"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa tierna elaborada con harina, huevo, leche y mantequilla.",
      "Relleno de crema de pistacho artesanal.",
      "Acabado con azúcar.",
    ],

    alergenos: [
      "Contiene gluten, lácteos, huevo y frutos secos.",
      "Puede contener trazas de otros frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "berlina-lotus",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina Lotus (Biscoff)",
    descripcion: "Berlina de masa esponjosa rellena de una cremosa crema Biscoff, con cobertura de chocolate y crumble de galleta caramelizada.",
    precioBase: 3.80,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/biscoff_doughnut_1.png",
        alt: "Vista principal de la berlina de Lotus Biscoff"
      },
      {
        src: "img/catalogo/filled_doughnut/biscoff_doughnut_2.jpg",
        alt: "Pack de berlinas de Lotus Biscoff"
      },
      {
        src: "img/catalogo/filled_doughnut/biscoff_doughnut_3.jpg",
        alt: "Berlinas de Lotus Biscoff recién salidas del horno"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa tierna elaborada con harina, huevo, leche y mantequilla.",
      "Relleno cremoso de crena Biscoff.",
      "Cobertura de chocolate y crumble de galleta caramelizada."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco.",
  },

  {
    id: "berlina-oreo",
    categoria: "BERLINAS",
    grupo: "berlinas",
    nombre: "Berlina Oreo",
    descripcion: "Berlina de masa esponjosa rellena de una suave crema Oreo, con cobertura de chocolate blanco y trozos de galleta.",
    precioBase: 3.90,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/filled_doughnut/oreo_doughnut_1.png",
        alt: "Vista principal de la berlina de Oreo"
      },
      {
        src: "img/catalogo/filled_doughnut/oreo_doughnut_2.jpg",
        alt: "Pack de berlinas de Oreo"
      },
      {
        src: "img/catalogo/filled_doughnut/oreo_doughnut_3.jpg",
        alt: "Berlinas de Oreo recién salidas del horno"
      }
    ],


    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: false },
      { nombre: "Pack de 8", cantidad: 8, descuento: 5, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 10, seleccionado: false }
    ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 8 y 10% en pack de 12."
  },

    notaPrecio: "Precio por ud. IVA incluido.",

    ingredientes: [
      "Masa elaborada con harina de trigo, huevo, leche, mantequilla y azúcar.",
      "Relleno cremoso de cookies and cream",
      "Cobertura de chocolate blanco y trozos de galleta de Oreo."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco.",
  },

  /* =========================================================
     CUPCAKES
     ========================================================= */

  {
    id: "cupcake-chocolate",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake de chocolate",
    descripcion: "Cupcake de bizcocho de chocolate suave y esponjoso, coronado con una cremosa buttercream de chocolate.",
    precioBase: 3.50,
    unidadTexto: "(4 uds)",
    
    galeria: [
      {
        src: "img/catalogo/cupcakes/choco_cupcakes_1.png",
        alt: "Vista principal de cupcake de chocolate"
      },
      {
        src: "img/catalogo/cupcakes/choco_cupcakes_2.png",
        alt: "Pack de 4 cupcakes de chocolate"
      },
      {
        src: "img/catalogo/cupcakes/choco_cupcakes_3.jpg",
        alt: "Cupcakes de chocolate recién salidas del horno y decoradas"
      }
    ],

  formatos: [
    { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
    { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
    { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
    { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
  ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 12 y 10% en pack de 20."
  },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y cacao.",
      "Crema buttercream de chocolate.",
      "Decoración con sirope de chocolate.",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-vainilla-limon",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake de vainilla y limón",
    descripcion: "Cupcake de bizcocho suave de vainilla con un toque de limón, coronado con una cremosa buttercream.",
    precioBase: 3.60,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/lemon_vanilla_cupcakes_1.png",
        alt: "Vista principal de cupcake de vainilla y limón"
      },
      {
        src: "img/catalogo/cupcakes/lemon_vanilla_cupcakes_2.jpg",
        alt: "Pack de 4 cupcakes de vainilla y limón"
      },
      {
        src: "img/catalogo/cupcakes/lemon_vanilla_cupcakes_3.jpg",
        alt: "Cupcakes de vainilla y limón recién salidas del horno y decoradas"
      }
    ],

  formatos: [
    { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
    { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
    { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
    { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
  ],

  promo: {
    titulo: "Promoción por cantidad",
    texto: "5% en pack de 12 y 10% en pack de 20."
  },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y vainilla.",
      "Toque de limón natural.",
      "Crema buttercream de vainilla y ralladura de limón",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-red-velvet",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake Red Velvet",
    descripcion: "Cupcake de bizcocho red velvet suave y aterciopelado, coronado con una cremosa buttercream de queso.",
    precioBase: 3.70,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/redvelvet_cupcakes_1.jpg",
        alt: "Vista principal de cupcake de redvelvet"
      },
      {
        src: "img/catalogo/cupcakes/redvelvet_cupcakes_2.jpg",
        alt: "Pack de 6 cupcakes de redvelvet"
      },
      {
        src: "img/catalogo/cupcakes/redvelvet_cupcakes_3.jpg",
        alt: "Cupcakes de redvelvet recién salidas del horno y decoradas"
      }
    ],


    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho red velvet elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y cacao.",
      "Crema buttercream de queso.",
      "Decoración con crumble de galleta red velvet",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-fresa-nata",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake de nata y fresas",
    descripcion: "Cupcake de bizcocho suave de vainilla coronado con una cremosa nata y fresas frescas.",
    precioBase: 3.70,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/strawberry_cupcakes_1.jpg",
        alt: "Vista principal de cupcake de fresa y nata"
      },
      {
        src: "img/catalogo/cupcakes/strawberry_cupcakes_2.jpg",
        alt: "Pack de 6 cupcakes de fresa y nata"
      },
      {
        src: "img/catalogo/cupcakes/strawberry_cupcakes_3.jpg",
        alt: "Cupcakes de fresa y nata recién salidas del horno y decoradas"
      }
    ],

    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y vainilla.",
      "Crema de nata montada.",
      "Fresas frescas."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-cherry",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake de cereza",
    descripcion: "Cupcake de bizcocho suave coronado con una cremosa buttercream y cerezas frescas.",
    precioBase: 3.80,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/cherry_cupcakes_1.jpg",
        alt: "Vista principal de cupcake de cereza"
      },
      {
        src: "img/catalogo/cupcakes/cherry_cupcakes_2.png",
        alt: "Pack de 6 cupcakes de cereza"
      },
      {
        src: "img/catalogo/cupcakes/cherry_cupcakes_3.jpg",
        alt: "Cupcakes de cereza salidos del horno y decoradas"
      }
    ],

    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla y azúcar.",
      "Crema buttercream de cereza",
      "Cerezas fresca."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-blueberry",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake de arándanos y kinder",
    descripcion: "Cupcake de bizcocho suave coronado con una cremosa buttercream, arándanos frescos y una mini-barrita de chocolate Kinder.",
    precioBase: 3.90,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/blueberry_cupcakes_1.png",
        alt: "Vista principal de cupcake de arándanos"
      },
      {
        src: "img/catalogo/cupcakes/blueberry_cupcakes_2.png",
        alt: "Pack de 6 cupcakes de arándanos"
      },
      {
        src: "img/catalogo/cupcakes/blueberry_cupcakes_3.jpg",
        alt: "Cupcakes de arándanos salidos del horno y decoradas"
      }
    ],

    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
        titulo: "Promoción por cantidad",
        texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla y azúcar.",
      "Crema buttercream.",
      "Arándanos frescos y trozos de chocolate Kinder."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-oreo",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake Oreo",
    descripcion: "Cupcake de bizcocho de chocolate suave coronado con una cremosa buttercream de Oreo y trozos de galleta.",
    precioBase: 3.70,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/oreo_cupcakes_1.jpg",
        alt: "Vista principal de cupcake de Oreo"
      },
      {
        src: "img/catalogo/cupcakes/oreo_cupcakes_2.jpg",
        alt: "Pack de 4 cupcakes de Oreo"
      },
      {
        src: "img/catalogo/cupcakes/oreo_cupcakes_3.jpg",
        alt: "Cupcakes de Oreo recién salidas del horno y decoradas"
      }
    ],

    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
        titulo: "Promoción por cantidad",
        texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y cacao.",
      "Crema buttercream con galleta Oreo.",
      "Decoración con galleta Oreo.",
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cupcake-choco-mint",
    categoria: "CUPCAKES",
    grupo: "cupcakes",
    nombre: "Cupcake choco mint Oreo",
    descripcion: "Cupcake de bizcocho de chocolate coronado con una cremosa buttercream de menta y trozos de galleta Oreo.",
    precioBase: 3.80,
    unidadTexto: "(4 uds)",

    galeria: [
      {
        src: "img/catalogo/cupcakes/mint_oreo_cupcakes_1.png",
        alt: "Vista principal de cupcake de choco mint Oreo"
      },
      {
        src: "img/catalogo/cupcakes/mint_oreo_cupcakes_2.png",
        alt: "Pack de 6 cupcakes de choco mint Oreo"
      },
      {
        src: "img/catalogo/cupcakes/mint_oreo_cupcakes_3.jpg",
        alt: "Cupcakes de choco mint Oreo salidos del horno y decoradas"
      }
    ],

    formatos: [
      { nombre: "Pack de 4", cantidad: 4, descuento: 0, seleccionado: true },
      { nombre: "Pack de 6", cantidad: 6, descuento: 0, seleccionado: false },
      { nombre: "Pack de 12", cantidad: 12, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false },
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 12 y 10% en pack de 20."
    },

    notaPrecio: "Precio por 4 uds. IVA incluido.",

    ingredientes: [
      "Bizcocho elaborado con harina de trigo, huevo, leche, mantequilla, azúcar y cacao.",
      "Crema buttercream con sabor a menta.",
      "Trozos de galleta Oreo."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos.",
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  /* =========================
     COOKIES 
     ========================= */

  {
    id: "cookie-milk-chocolate",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie milk chocolate",
    descripcion: "Cookie clásica de masa dorada con trozos de chocolate con leche, tierna por dentro y con un ligero acabado crujiente.",
    precioBase: 2.20,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/milk_chocolate_cookies_1.png",
        alt: "Vista principal de cookie milk chocolate"
      },
      {
        src: "img/catalogo/cookies/milk_chocolate_cookies_2.jpg",
        alt: "Detalle de cookie milk chocolate"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Trozos de chocolate con leche."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-cookies-and-cream",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie cookies and cream",
    descripcion: "Cookie de masa suave con trozos de galleta tipo Oreo y chocolate blanco, cremosa y muy golosa.",
    precioBase: 2.40,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/cookies_and_cream_cookies_1.jpg",
        alt: "Vista principal de cookie cookies and cream"
      },
      {
        src: "img/catalogo/cookies/cookies_and_cream_cookies_2.jpg",
        alt: "Detalle de cookie cookies and cream"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Trozos de galleta tipo Oreo.",
      "Chocolate blanco."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-red-velvet",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie red velvet",
    descripcion: "Cookie red velvet de textura suave y color intenso, con trozos de chocolate blanco que aportan cremosidad y contraste.",
    precioBase: 2.50,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/red_velvet_cookies_1.jpg",
        alt: "Vista principal de cookie red velvet"
      },
      {
        src: "img/catalogo/cookies/red_velvet_cookies_2.jpg",
        alt: "Detalle de cookie red velvet"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa red velvet elaborada con harina de trigo, huevo, mantequilla, azúcar y cacao.",
      "Trozos de chocolate blanco."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-lotus",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie Lotus",
    descripcion: "Cookie de masa suave con sabor caramelizado, acabada con crema Lotus y galleta speculoos en la superficie.",
    precioBase: 2.60,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/lotus_cookies_1.jpg",
        alt: "Vista principal de cookie Lotus"
      },
      {
        src: "img/catalogo/cookies/lotus_cookies_2.jpg",
        alt: "Detalle de cookie Lotus"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla y azúcar moreno.",
      "Crema Lotus o speculoos.",
      "Galleta Lotus en la superficie."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-blueberry-cheesecake",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie blueberry cheesecake",
    descripcion: "Cookie de masa suave con remolino cremoso tipo cheesecake y arándanos, equilibrada entre dulzor y sabor afrutado.",
    precioBase: 2.70,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/blueberry_cheesecake_cookies_1.jpg",
        alt: "Vista principal de cookie blueberry cheesecake"
      },
      {
        src: "img/catalogo/cookies/blueberry_cheesecake_cookies_2.jpg",
        alt: "Detalle de cookie blueberry cheesecake"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Remolino cremoso tipo cheesecake.",
      "Arándanos integrados en la masa y en la superficie."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cookie-raspberry-white-chocolate",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie raspberry white chocolate",
    descripcion: "Cookie de masa suave con frambuesa y trozos de chocolate blanco, equilibrada entre cremosidad, dulzor y un toque afrutado.",
    precioBase: 2.80,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/raspberry_white chocolate_cookies_1.jpg",
        alt: "Vista principal de cookie raspberry white chocolate"
      },
      {
        src: "img/catalogo/cookies/raspberry_white chocolate_cookies_2.jpg",
        alt: "Detalle de cookie raspberry white chocolate"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Frambuesa integrada en la masa.",
      "Trozos de chocolate blanco."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-chocolate-covered-strawberry",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie chocolate covered strawberry",
    descripcion: "Cookie de cacao con trozos de fresa y acabado de chocolate, una combinación intensa con un punto afrutado.",
    precioBase: 2.80,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/chocolate_covered_strawberry_cookies_1.jpg",
        alt: "Vista principal de cookie chocolate covered strawberry"
      },
      {
        src: "img/catalogo/cookies/chocolate_covered_strawberry_cookies_2.jpg",
        alt: "Detalle de cookie chocolate covered strawberry"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie de cacao elaborada con harina de trigo, huevo, mantequilla, azúcar y cacao.",
      "Trozos de fresa integrados en la masa.",
      "Acabado de chocolate en la superficie."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-caramel-apple",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie caramel apple",
    descripcion: "Cookie suave con trozos de manzana y acabado de caramelo, pensada para quienes buscan un sabor dulce y especiado.",
    precioBase: 2.70,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/caramel_apple_cookies_1.jpg",
        alt: "Vista principal de cookie caramel apple"
      },
      {
        src: "img/catalogo/cookies/caramel_apple_cookies_2.jpg",
        alt: "Detalle de cookie caramel apple"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Trozos de manzana integrados en la masa.",
      "Acabado con salsa de caramelo."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-carrot-cake-cheesecake",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie carrot cake cheesecake",
    descripcion: "Cookie inspirada en la carrot cake, con masa suave, toque especiado y centro cremoso tipo cheesecake.",
    precioBase: 2.90,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/carrot_cake_cheesecake_cookies_1.jpg",
        alt: "Vista principal de cookie carrot cake cheesecake"
      },
      {
        src: "img/catalogo/cookies/carrot_cake_cheesecake_cookies_2.jpg",
        alt: "Detalle de cookie carrot cake cheesecake"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y zanahoria.",
      "Toque especiado tipo carrot cake.",
      "Centro o remolino cremoso tipo cheesecake."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco."
  },

  {
    id: "cookie-white-chocolate-lime",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie white chocolate lime",
    descripcion: "Cookie de masa suave con chocolate blanco y un toque cítrico de lima, fresca, ligera y diferente.",
    precioBase: 2.80,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/white_chocolate_lime_cookies_1.jpg",
        alt: "Vista principal de cookie white chocolate lime"
      },
      {
        src: "img/catalogo/cookies/white_chocolate_lime_cookies_2.jpg",
        alt: "Detalle de cookie white chocolate lime"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y vainilla.",
      "Trozos de chocolate blanco.",
      "Toque cítrico de lima en la masa."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  },

  {
    id: "cookie-matcha-white-chocolate",
    categoria: "COOKIES",
    grupo: "cookies",
    nombre: "Cookie matcha white chocolate",
    descripcion: "Cookie de té matcha con interior suave y trozos de chocolate blanco, equilibrada entre dulzor y notas vegetales.",
    precioBase: 2.90,
    unidadTexto: "/ ud.",

    galeria: [
      {
        src: "img/catalogo/cookies/matcha_white_chocolate_cookies_1.png",
        alt: "Vista principal de cookie matcha white chocolate"
      },
      {
        src: "img/catalogo/cookies/matcha_white_chocolate_cookies_2.jpg",
        alt: "Detalle de cookie matcha white chocolate"
      }
    ],

    formatos: [
      { nombre: "Unidad", cantidad: 1, descuento: 0, seleccionado: true },
      { nombre: "Pack de 5", cantidad: 5, descuento: 0, seleccionado: false },
      { nombre: "Pack de 10", cantidad: 10, descuento: 5, seleccionado: false },
      { nombre: "Pack de 20", cantidad: 20, descuento: 10, seleccionado: false }
    ],

    promo: {
      titulo: "Promoción por cantidad",
      texto: "5% en pack de 10 y 10% en pack de 20."
    },

    notaPrecio: "Precio por unidad. IVA incluido.",

    ingredientes: [
      "Masa de cookie elaborada con harina de trigo, huevo, mantequilla, azúcar y té matcha.",
      "Trozos de chocolate blanco.",
      "Acabado suave y tierno en el centro."
    ],

    alergenos: [
      "Contiene gluten, lácteos y huevo.",
      "Puede contener trazas de frutos secos."
    ],

    textoExtra: "Se recomienda mantener en lugar fresco y seco."
  }
];