import { elements } from "../elements.js";
import { listaPalpites } from "../config/contants.js";
export function gerarRetornarArrayPalpites(value) {
    const numeroPalpite = listaPalpites.push(Number(value));
    if (isNaN(numeroPalpite))
        return;
    if (!elements.paragrafoPalpites)
        return;
    const htmlPalpites = listaPalpites
        .map((p) => {
        return `<span>${p}</span>`;
    })
        .join("");
    elements.paragrafoPalpites.innerHTML = `Últimos palpites: ${htmlPalpites}`;
}
