/* ========================================================= 
   LISTA GLOBAL DE OPINIONES
   =========================================================
   Este archivo funciona como una pequeña base de datos en JS.

   Cada opinión pertenece a un producto concreto mediante
   la propiedad "productoId". También se incluye el "grupo"
   para poder organizar o filtrar contenido más fácilmente.

   La página producto.html buscará las opiniones filtrando
   por el id del producto que se esté visualizando.
*/

const opiniones = [

  /* =========================
     BERLINAS
     ========================= */

  {
    id: 1,
    grupo: "berlinas",
    productoId: "berlina-chocolate",
    autor: "Marta R.",
    estrellas: 5,
    texto: "La crema de chocolate es muy intensa y la masa está esponjosa. Repetiría sin duda."
  },
  {
    id: 2,
    grupo: "berlinas",
    productoId: "berlina-chocolate",
    autor: "David S.",
    estrellas: 4,
    texto: "Muy rica, aunque me habría gustado un poco más de relleno de chocolate."
  },

  {
    id: 3,
    grupo: "berlinas",
    productoId: "berlina-crema",
    autor: "Laura M.",
    estrellas: 5,
    texto: "La crema pastelera tiene un sabor muy casero. De las mejores que he probado."
  },
  {
    id: 4,
    grupo: "berlinas",
    productoId: "berlina-crema",
    autor: "Carlos T.",
    estrellas: 4,
    texto: "Muy buena textura y nada empalagosa. Quizá un poco más grande sería perfecta."
  },

  {
    id: 5,
    grupo: "berlinas",
    productoId: "berlina-fresa",
    autor: "Ana G.",
    estrellas: 4,
    texto: "La mezcla de fresa con la masa queda muy bien. Fresca y ligera."
  },
  {
    id: 6,
    grupo: "berlinas",
    productoId: "berlina-fresa",
    autor: "Sergio L.",
    estrellas: 3,
    texto: "Está buena, pero esperaba un sabor a fresa un poco más intenso."
  },

  {
    id: 7,
    grupo: "berlinas",
    productoId: "berlina-pistacho",
    autor: "Lucía V.",
    estrellas: 5,
    texto: "El topping de pistacho le da un toque diferente. Muy equilibrada de sabor."
  },
  {
    id: 8,
    grupo: "berlinas",
    productoId: "berlina-pistacho",
    autor: "Miguel A.",
    estrellas: 4,
    texto: "Muy buena combinación, aunque el pistacho podría notarse un poco más."
  },

  {
    id: 9,
    grupo: "berlinas",
    productoId: "berlina-lotus",
    autor: "Paula D.",
    estrellas: 5,
    texto: "Si te gusta Lotus esta berlina es una locura. Muy cremosa y con mucho sabor."
  },
  {
    id: 10,
    grupo: "berlinas",
    productoId: "berlina-lotus",
    autor: "Rubén F.",
    estrellas: 4,
    texto: "Muy sabrosa y con buen relleno, aunque es bastante dulce."
  },

  {
    id: 11,
    grupo: "berlinas",
    productoId: "berlina-oreo",
    autor: "Claudia P.",
    estrellas: 5,
    texto: "La crema con Oreo queda brutal. Muy buena presentación además."
  },
  {
    id: 12,
    grupo: "berlinas",
    productoId: "berlina-oreo",
    autor: "Iván R.",
    estrellas: 4,
    texto: "Muy rica y original. Quizá un poco más crujiente la galleta sería ideal."
  },

  /* =========================
     CUPCAKES
     ========================= */

  {
    id: 13,
    grupo: "cupcakes",
    productoId: "cupcake-chocolate",
    autor: "Elena B.",
    estrellas: 5,
    texto: "El bizcocho es muy jugoso y la crema de chocolate está muy bien equilibrada."
  },
  {
    id: 14,
    grupo: "cupcakes",
    productoId: "cupcake-chocolate",
    autor: "Raúl M.",
    estrellas: 4,
    texto: "Muy buen sabor a chocolate. Algo más de crema tampoco vendría mal."
  },

  {
    id: 15,
    grupo: "cupcakes",
    productoId: "cupcake-vainilla-limon",
    autor: "Patricia N.",
    estrellas: 4,
    texto: "La combinación de vainilla y limón es fresca y ligera."
  },
  {
    id: 16,
    grupo: "cupcakes",
    productoId: "cupcake-vainilla-limon",
    autor: "Diego H.",
    estrellas: 3,
    texto: "Está bueno, pero el toque de limón podría notarse un poco más."
  },

  {
    id: 17,
    grupo: "cupcakes",
    productoId: "cupcake-red-velvet",
    autor: "Sara C.",
    estrellas: 5,
    texto: "Muy suave y la crema queda perfecta con el bizcocho red velvet."
  },
  {
    id: 18,
    grupo: "cupcakes",
    productoId: "cupcake-red-velvet",
    autor: "Luis J.",
    estrellas: 4,
    texto: "Muy equilibrado de sabor y bien presentado."
  },

  {
    id: 19,
    grupo: "cupcakes",
    productoId: "cupcake-fresa-nata",
    autor: "Mónica S.",
    estrellas: 4,
    texto: "Muy fresco y ligero. La fresa le da un toque muy bueno."
  },
  {
    id: 20,
    grupo: "cupcakes",
    productoId: "cupcake-fresa-nata",
    autor: "Alberto V.",
    estrellas: 3,
    texto: "Está bien, aunque esperaba un poco más de sabor a fresa."
  },

  {
    id: 21,
    grupo: "cupcakes",
    productoId: "cupcake-cherry",
    autor: "Rosa T.",
    estrellas: 4,
    texto: "Muy bonito y la cereza le da un toque diferente."
  },
  {
    id: 22,
    grupo: "cupcakes",
    productoId: "cupcake-cherry",
    autor: "Jorge P.",
    estrellas: 3,
    texto: "Correcto de sabor, aunque algo más de crema lo mejoraría."
  },

  {
    id: 23,
    grupo: "cupcakes",
    productoId: "cupcake-blueberry",
    autor: "Daniela F.",
    estrellas: 5,
    texto: "La mezcla de arándanos con Kinder queda sorprendentemente bien."
  },
  {
    id: 24,
    grupo: "cupcakes",
    productoId: "cupcake-blueberry",
    autor: "Tomás G.",
    estrellas: 4,
    texto: "Muy original y bien equilibrado de dulce."
  },

  {
    id: 25,
    grupo: "cupcakes",
    productoId: "cupcake-oreo",
    autor: "Natalia L.",
    estrellas: 5,
    texto: "El sabor a Oreo está muy logrado. Muy cremoso."
  },
  {
    id: 26,
    grupo: "cupcakes",
    productoId: "cupcake-oreo",
    autor: "Pedro M.",
    estrellas: 4,
    texto: "Muy bueno, aunque es bastante contundente."
  },

  {
    id: 27,
    grupo: "cupcakes",
    productoId: "cupcake-choco-mint",
    autor: "Carla R.",
    estrellas: 4,
    texto: "El toque de menta con chocolate queda muy bien."
  },
  {
    id: 28,
    grupo: "cupcakes",
    productoId: "cupcake-choco-mint",
    autor: "Hugo D.",
    estrellas: 3,
    texto: "Está bien, aunque la menta es un sabor que no a todo el mundo le gusta."
  }

];