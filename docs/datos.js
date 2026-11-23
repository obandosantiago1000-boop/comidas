const restaurante = {
  nombre: "Galeras Food & Grill",
  direccion: "Barrio Kennedy, calle 26, número 6D-19",
  telefono: "+57 318 514 7956",
  whatsapp: "573185147956",
  desayunos: "7:00 a. m. a 11:00 a. m.",
  horarioGeneral: "",
  redes: [] // Cada red lleva { nombre, url }.
};

const carta = [
  { nombre: "Hamburguesas", icono: "burger", productos: [
    ["Hamburguesa Mag", 17000, "Pan artesanal, 150 g de carne, lechuga, tomate, ripio, queso y papas francesas. Con salsas caseras.", "plato-0-0.jpg"],
    ["Hamburguesa Las Lajas", 18000, "Pan artesanal, 150 g de carne, huevo, tocineta, lechuga, tomate, cebolla caramelizada, ripio, queso y papas francesas con salsas caseras.", "plato-0-1.jpg"],
    ["Hamburguesa Nevada", 19000, "Pan artesanal, pollo apanado, lechuga, pepinillos, tomate, ripio, queso y papas francesas con salsas caseras.", "plato-0-2.jpg"],
    ["Hamburguesa Especial", 22000, "Pan artesanal, 150 g de carne, pollo apanado, lechuga, tomate, tocineta, cebolla caramelizada, huevo, ripio, queso y papas francesas con salsas caseras.", "plato-0-3.jpg"]
  ]},
  { nombre: "Salchipapas", icono: "fries", productos: [
    ["Salchipapa clásica", 17000, "400 g de papas francesas, salchicha americana, queso fundido, maíz, ripio y salsas.", "plato-1-0.jpg"],
    ["Salchipapa Chiles", 18000, "400 g de papas, salchicha americana, queso fundido, maíz, ripio, carne molida mexicana, pico de gallo, guacamole y jalapeños.", "plato-1-1.jpg"],
    ["Salchipapa Pork", 25000, "400 g de papas, salchicha americana, queso fundido, maíz, ripio, cerdo en salsa BBQ, panceta, guacamole y salsas especiales.", "plato-1-2.jpg"],
    ["Salchipapa Nevada", 24000, "400 g de papas, salchicha americana, queso fundido, maíz, ripio y bocados de pollo sin hueso.", "plato-1-3.jpg"],
    ["Salchipapa Galeras", 35000, "400 g de papas, salchicha americana, queso fundido, maíz, ripio, carne molida mexicana, bocados de pollo sin hueso, panceta, pico de gallo, guacamole, maduritos y salsas de la casa.", "plato-1-4.jpg"]
  ]},
  { nombre: "Mazorcadas", icono: "corn", productos: [
    ["Mazorcada Dulce", 19000, "Salteado de maíz con queso, pollo, cerdo y tocineta sobre lechuga fresca y papas a la francesa.", "plato-2-0.jpg"],
    ["Mazorcada Mexicana", 20000, "Papas a la francesa, carne molida ligeramente picante, queso, maíz salteado, guacamole y pico de gallo.", "plato-2-1.jpg"],
    ["Mazorcada de Pollo", 18000, "Maíz desgranado, queso fundido, cubos de pollo y papas a la francesa sobre lechuga fresca.", "plato-2-2.jpg"],
    ["Mazorcada Pork", 18000, "Maíz desgranado, queso fundido, cubos de cerdo y papas a la francesa sobre lechuga fresca.", "plato-2-3.jpg"]
  ]},
  { nombre: "Maduritos", icono: "leaf", productos: [
    ["Madurito Nevado – Pollo Juliana", 18000, "Canoa de plátano maduro con julianas de pollo, queso, maíz, ripio de papa y salsas caseras.", "plato-3-0.jpg"],
    ["Madurito Morazurco Res Desmechada", 19000, "Canoa de plátano rellena de res desmechada, queso, maíz y ripio de papa.", "plato-3-1.jpg"],
    ["Madurito Azufral Pork Belly", 18000, "Canoa de plátano maduro con cerdo desmechado, queso, maíz y ripio de papa.", "plato-3-2.jpg"],
    ["Madurito Galeras", 26000, "Canoa de plátano maduro con pollo desmechado, res, cerdo, panceta, queso, maíz y ripio de papa.", "plato-3-3.jpg"]
  ]},
  { nombre: "Bebidas", icono: "drink", productos: [
    ["Picoso de Nariño – Hervidos", 8000, "Hervidos calientes de Nariño con mora, maracuyá y lulo.", "plato-4-0.jpg"],
    ["Jugos naturales en agua", 5000, "Jugos de frutas variadas preparados en agua.", "plato-4-1.jpg"],
    ["Jugos naturales en leche", 7000, "Jugos cremosos preparados con leche y frutas frescas.", "plato-4-2.jpg"],
    ["Gaseosas", 5000, "Gaseosas frías en presentación personal y de litro.", "plato-4-3.jpg"]
  ]},
  { nombre: "Desayunos", icono: "sun", productos: [
    ["Desayuno Volcán Chiles", 7000, "Dos huevos, arroz, papitas y cafecito."],
    ["Desayuno Volcán Cumbal", 10000, "Calentado de frijol, huevo, papa y café."],
    ["Desayuno Volcán Azufral", 12000, "Mote, chicharrón, huevo, ají de maní y chocolate."],
    ["Desayuno Volcán Cerro Negro", 15000, "Carne asada, dos huevos, arroz, papas y jugo."]
  ]}
];
