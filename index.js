const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Pizzas con id impar
const pizzasImpares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log("Pizzas con id impar:");
pizzasImpares.forEach((pizza) =>
  console.log(`- ${pizza.nombre} (ID: ${pizza.id})`)
);

console.log("----------------------------------------------------");

// b) ¿Hay alguna pizza que valga menos de $600?
const pizzaBarata = pizzas.some((pizza) => pizza.precio < 600);
console.log(
  `¿Hay alguna pizza que valga menos de $600? ${pizzaBarata ? "Sí" : "No"}`
);
const barata = pizzas.filter((pizza) => pizza.precio < 600);
barata.forEach((pizza) => console.log(`${pizza.nombre}, $${pizza.precio}`));

console.log("----------------------------------------------------");

// c) Nombre de cada pizza con su respectivo precio
console.log("Nombre de cada pizza con su respectivo precio:");
pizzas.forEach((pizza) => console.log(`- ${pizza.nombre}: $${pizza.precio}`));

console.log("----------------------------------------------------");

// d) Ingredientes de cada pizza
console.log("Ingredientes de cada pizza:");
pizzas.forEach((pizza) => {
  console.log(`- ${pizza.nombre}: ${pizza.ingredientes.join(", ")}`);
});
