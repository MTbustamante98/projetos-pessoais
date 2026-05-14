import { elements } from "../elements.js";
import { numeroAleatorioGerado } from "../config/contants.js";
import { assertExists } from "utils/funcsUtilitarias.js";

export function verificarJogadaAltaOuBaixa(value: number | undefined) {
  const { mensagemAltoBaixo, btnIniciarGame } = elements;
  
  if (
    value === undefined ||
    !mensagemAltoBaixo ||
    btnIniciarGame?.disabled
  )
    return;

  const diferenca = Math.abs(value - numeroAleatorioGerado);
  const estaPerto = diferenca <= 3 && diferenca > 0;

  let mensagem =
    value > numeroAleatorioGerado
      ? "Seu último palpite foi muito alto"
      : "Seu último palpite foi muito baixo";

  if (estaPerto) mensagemAltoBaixo.innerText = "Você está quase lá!";

  mensagemAltoBaixo.innerText = mensagem;
}
