/* ========================================================= 
   LISTA GLOBAL DE PREGUNTAS FRECUENTES
   =========================================================
   Este archivo funciona como una pequeña base de datos en JS.

   Las preguntas frecuentes están organizadas por "grupo"
   de producto.

   La página producto.html podrá mostrar las preguntas
   frecuentes del grupo al que pertenece el producto que
   se esté visualizando.
*/

const preguntasFrecuentesPorGrupo = {

  /* =========================
     BERLINAS
     ========================= */

  berlinas: [
    {
      pregunta: "¿Se pueden encargar berlinas para eventos o celebraciones?",
      respuesta: "Sí, se pueden preparar pedidos especiales para cumpleaños, reuniones y otros eventos, según disponibilidad."
    },
    {
      pregunta: "¿Cuánto tiempo se conservan en buen estado?",
      respuesta: "Lo ideal es consumirlas el mismo día para disfrutar mejor de la textura de la masa y del relleno."
    },
    {
      pregunta: "¿Se pueden pedir berlinas de varios sabores en un mismo pedido?",
      respuesta: "Sí, puedes combinar distintos sabores dentro del mismo pedido, siempre que haya disponibilidad."
    },
    {
      pregunta: "¿Todas las berlinas van rellenas?",
      respuesta: "Sí, cada berlina incluye un relleno acorde a su sabor, además de su cobertura o decoración correspondiente."
    },
    {
      pregunta: "¿Cómo se recomienda conservarlas si no se van a consumir al momento?",
      respuesta: "Se recomienda guardarlas en un recipiente cerrado y en un lugar fresco. Aun así, su mejor textura se disfruta el mismo día."
    },
    {
      pregunta: "¿Hay sabores de berlina que cambian según la temporada?",
      respuesta: "Sí, algunos sabores o ediciones especiales pueden variar según la temporada o campañas concretas."
    }
  ],

  /* =========================
     CUPCAKES
     ========================= */

  cupcakes: [
    {
      pregunta: "¿Se pueden personalizar los cupcakes para cumpleaños o eventos?",
      respuesta: "Sí, se pueden adaptar algunos detalles de decoración o presentación según el tipo de pedido y la disponibilidad."
    },
    {
      pregunta: "¿Se pueden pedir cupcakes variados en una misma caja?",
      respuesta: "Sí, es posible combinar varios sabores en un mismo pedido para tener una selección más variada."
    },
    {
      pregunta: "¿Cuánto duran los cupcakes en buen estado?",
      respuesta: "Normalmente se conservan bien entre 1 y 2 días si se mantienen en un lugar fresco y protegidos del calor."
    },
    {
      pregunta: "¿Son una buena opción para pedidos grandes?",
      respuesta: "Sí, los cupcakes suelen ser una opción muy cómoda para eventos, mesas dulces y celebraciones con varios invitados."
    },
    {
      pregunta: "¿La decoración y la crema pueden variar según el sabor?",
      respuesta: "Sí, cada cupcake puede llevar una crema, topping o decoración distinta en función de su sabor y diseño."
    },
    {
      pregunta: "¿Se recomienda guardarlos en nevera?",
      respuesta: "Depende del tipo de crema y de la temperatura ambiente, pero en general conviene conservarlos en un lugar fresco para mantener mejor su forma y textura."
    }
  ]

};