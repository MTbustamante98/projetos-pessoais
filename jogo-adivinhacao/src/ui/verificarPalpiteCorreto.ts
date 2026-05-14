import { elements } from "../elements.js";
import { numeroAleatorioGerado, active } from "../config/contants.js";
import {
  assertExists,
  verificarTrueDisabled,
} from "../utils/funcsUtilitarias.js";

export function verifiarPalpiteCorreto(value: number | undefined): void {
  const {
    mensagemErroAcerto,
    inputPalpites,
    btnIniciarGame,
    mensagemAltoBaixo,
    btnNewGame,
  } = elements;

  //verificar em runtime, se item é null
  if (assertExists(elements)) return;

  const palpiteCorreto = numeroAleatorioGerado === value;

  mensagemErroAcerto!.innerText = palpiteCorreto
    ? "Parabéns! Você acertou!"
    : "Errado";

  mensagemErroAcerto!.classList.toggle("activeCorrect", palpiteCorreto);
  mensagemErroAcerto!.classList.toggle("activeWrong", !palpiteCorreto);

  if (palpiteCorreto && mensagemAltoBaixo) mensagemAltoBaixo.innerHTML = "";

  if (mensagemErroAcerto!.classList.contains("activeCorrect")) {
    verificarTrueDisabled(btnIniciarGame, inputPalpites);
    btnNewGame!.classList.remove(active);
  }
}
