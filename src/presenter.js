import { calcTotal, obtenerTazaImpuesto } from "./totalizador.js";

const items = document.querySelector("#numero-items");
const price = document.querySelector("#precio-unitario");
const state = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberItems = ` Cantidad de items: ${items.value}`;
  const priceUnit = `Precio Unitario: ${price.value}`;
  const  impuesto = `Impuesto: ${obtenerTazaImpuesto(state.value)}`;
  let total = `Total: ${calcTotal(items.value, price.value) + (calcTotal(items.value, price.value) * obtenerTazaImpuesto(state.value))}`;
  div.innerHTML = "<h3>" + numberItems+ "<br>" + priceUnit+ "<br>" + impuesto + "<br>" + total +"</h3>";
});
