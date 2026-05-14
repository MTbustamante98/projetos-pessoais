import { elements } from "../ui/elements.js";
import { TEXTOS } from "../config/uiConfigsGlobais.js";
const tituloPagina = elements?.tituloPagina;
let fraseAcumulada = "";
let i = 0;
function efeitoDigitacao() {
    if (i < TEXTOS.fraseTitulo.length) {
        fraseAcumulada += TEXTOS.fraseTitulo[i];
        i++;
        if (tituloPagina)
            tituloPagina.innerText = fraseAcumulada;
        setTimeout(efeitoDigitacao, 100);
    }
    return fraseAcumulada;
}
efeitoDigitacao();
