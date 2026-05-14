import { elements } from "../elements.js";
import { listaPalpites, active } from "../config/contants.js";
import { verificarTrueDisabled } from "../utils/funcsUtilitarias.js";
export function verificarNumeroJogadas() {
    if (elements.btnIniciarGame === null ||
        elements.inputPalpites === null ||
        elements.mensagemErroAcerto === null ||
        elements.mensagemAltoBaixo === null)
        return;
    if (listaPalpites.length >= 10) {
        verificarTrueDisabled(elements.btnIniciarGame, elements.inputPalpites);
        elements.mensagemErroAcerto.innerText = "Fim de jogo!!!";
        elements.mensagemAltoBaixo.innerHTML = "";
        elements.btnNewGame?.classList.remove(active);
        listaPalpites.length = 0;
    }
}
