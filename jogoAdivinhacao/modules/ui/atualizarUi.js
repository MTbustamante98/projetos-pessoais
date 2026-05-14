import { puxarValorInput } from "../puxarValorInput.js";
import { elements } from "../elements.js";
import { verificarNumeroJogadas } from "./verificarNumeroJogadas.js";
import { verificarJogadaAltaOuBaixa } from "./jogadaAltaOuBaixa.js";
import { verifiarPalpiteCorreto } from "./verificarPalpiteCorreto.js";
import { gerarRetornarArrayPalpites } from "./retornarArrayPalpites.js";
export function atualizarPalpitesNaTela() {
    const valueInputPalpite = puxarValorInput();
    if (!valueInputPalpite)
        return;
    if (elements.inputPalpites)
        elements.inputPalpites.value = "";
    verifiarPalpiteCorreto(valueInputPalpite);
    gerarRetornarArrayPalpites(valueInputPalpite);
    verificarNumeroJogadas();
    verificarJogadaAltaOuBaixa(valueInputPalpite);
}
