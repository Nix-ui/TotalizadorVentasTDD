import sumar from "./sumador";

const items = document.querySelector("#numero-items");
const price = document.querySelector("#precio-unitario");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberItems = ` Cantidad de items: ${items.value}`;
  const priceUnit = `Precio Unitario: ${price.value}`;

  div.innerHTML = "<h3>" + numberItems+ "<br>" + priceUnit+ "</h3>";
});
