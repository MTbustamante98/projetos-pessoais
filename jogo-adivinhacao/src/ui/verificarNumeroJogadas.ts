import { elements } from "../elements.js";
import { listaPalpites, active } from "../config/contants.js";
import {
  assertExists,
  verificarTrueDisabled,
} from "../utils/funcsUtilitarias.js";

export function verificarNumeroJogadas(): void {
  const {
    btnIniciarGame,
    inputPalpites,
    mensagemErroAcerto,
    mensagemAltoBaixo,
    btnNewGame,
  } = elements;

  if (listaPalpites.length >= 10 && assertExists(elements)) {
    verificarTrueDisabled(btnIniciarGame, inputPalpites);
    mensagemErroAcerto!.innerText = "Fim de jogo!!!";
    mensagemAltoBaixo!.innerHTML = "";
    btnNewGame!.classList.remove(active);
    listaPalpites.length = 0;
  }
}
