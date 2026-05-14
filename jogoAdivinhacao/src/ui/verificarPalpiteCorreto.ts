import { elements } from "../elements.js";
import { numeroAleatorioGerado, active } from "../config/contants.js";
import { verificarTrueDisabled } from "../utils/funcsUtilitarias.js";

export function verifiarPalpiteCorreto(value: number | undefined): void {
  const palpiteCorreto = numeroAleatorioGerado === value;

  if (!elements.mensagemErroAcerto) return;

  elements.mensagemErroAcerto.innerText = palpiteCorreto
    ? "Parabéns! Você acertou!"
    : "Errado";

  elements.mensagemErroAcerto.classList.toggle("activeCorrect", palpiteCorreto);
  elements.mensagemErroAcerto.classList.toggle("activeWrong", !palpiteCorreto);

  if (palpiteCorreto && elements.mensagemAltoBaixo)
    elements.mensagemAltoBaixo.innerHTML = "";

  if (elements.mensagemErroAcerto.classList.contains("activeCorrect")) {
    verificarTrueDisabled(elements.btnIniciarGame, elements.inputPalpites);
    elements.btnNewGame?.classList.remove(active);
  }
}
