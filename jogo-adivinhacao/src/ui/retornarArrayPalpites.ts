import { elements } from "../elements.js";
import { listaPalpites } from "../config/contants.js";

export function gerarRetornarArrayPalpites(value: number | undefined): void {
  if (
    value === undefined ||
    isNaN(value) ||
    elements.paragrafoPalpites === null
  )
    return;

  listaPalpites.push(value);

  if (elements.paragrafoPalpites === null) return;

  const htmlPalpites = listaPalpites
    .map((p) => {
      return `<span>${p}</span>`;
    })
    .join("");

  elements.paragrafoPalpites.innerHTML = `Últimos palpites: ${htmlPalpites}`;
}
