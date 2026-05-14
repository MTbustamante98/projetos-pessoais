import { elements } from "../elements.js";
import { numeroAleatorioGerado } from "../config/contants.js";
export function verificarJogadaAltaOuBaixa(value) {
    if (value === undefined)
        return;
    if (!elements.mensagemAltoBaixo || elements.btnIniciarGame?.disabled)
        return;
    const diferenca = Math.abs(value - numeroAleatorioGerado);
    const estaPerto = diferenca <= 3 && diferenca > 0;
    value > numeroAleatorioGerado
        ? (elements.mensagemAltoBaixo.innerText =
            "Seu último palpite foi muito alto")
        : (elements.mensagemAltoBaixo.innerText =
            "Seu último palpite foi muito baixo");
    if (estaPerto)
        elements.mensagemAltoBaixo.innerHTML = "Você está quase lá!";
}
