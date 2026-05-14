import { gerarNumeroAleatorio } from "../gerarNumeroAleatorio.js";
import { elements } from "../elements.js";
export const active = "active";
export const listaPalpites = [];
export const numeroAleatorioGerado = gerarNumeroAleatorio();
export const arrayElementsParagrafos = [
    elements.paragrafoPalpites,
    elements.btnNewGame,
    elements.mensagemErroAcerto,
    elements.mensagemAltoBaixo,
];
