import { atualizarPalpitesNaTela } from "./ui/atualizarUi.js";
import { elements } from "./elements.js";
import { limparDadosTotais, iterarLimparNumerosPalpites, } from "./utils/funcsUtilitarias.js";
function iniciarJogo(e) {
    e.preventDefault();
    atualizarPalpitesNaTela();
    elements.inputPalpites?.focus();
}
function restartJogo(e) {
    e.preventDefault();
    limparDadosTotais();
    iterarLimparNumerosPalpites();
}
if (elements.btnIniciarGame instanceof HTMLButtonElement)
    elements.btnIniciarGame.addEventListener("click", iniciarJogo);
if (elements.btnNewGame instanceof HTMLButtonElement)
    elements.btnNewGame.addEventListener("click", restartJogo);
