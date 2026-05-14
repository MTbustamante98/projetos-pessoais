import { elements } from "../elements.js";
import { arrayElementsParagrafos, listaPalpites } from "../config/contants.js";

export function verificarTrueDisabled(...value: any[]) {
  return value.forEach((item) => (item.disabled = true));
}

export function verificarFalseDisabled(...value: any[]) {
  return value.forEach((item) => (item.disabled = false));
}

export function limparDadosTotais() {
  for (const paragrafos of arrayElementsParagrafos) {
    if (paragrafos) paragrafos.innerHTML = "";
  }

  elements.mensagemErroAcerto?.classList.remove("activeCorrect");
  elements.mensagemErroAcerto?.classList.remove("activeWrong");

  verificarFalseDisabled(elements.btnIniciarGame, elements.inputPalpites);
}

export function iterarLimparNumerosPalpites() {
  const childrens = [...elements.paragrafoPalpites!.children] as HTMLElement[];

  childrens.forEach((item) => (item.innerHTML = ""));
  listaPalpites.length = 0;
}

//verificar em runtime, se item é null
export function assertExists(elements: Record<string, unknown>): boolean {
  return Object.values(elements).every((el) => el !== null && el !== undefined);
}
