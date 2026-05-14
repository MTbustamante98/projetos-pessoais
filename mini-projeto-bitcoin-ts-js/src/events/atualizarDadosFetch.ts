import { elements } from "../ui/elements.js";
import { mostrarDadosNaTela, mostrarLoading } from "../ui/dadosAPICard.js";
import { fetchData } from "../services/scriptAPIconversaoBTC.js";

async function anexarDadosApi() {
  try {
    mostrarLoading();

    const dados = await fetchData();

    mostrarDadosNaTela(dados);
  } catch (e) {
    console.error("Erro no processamento dos dados", e);
  }
}

if (elements.btnAtualizar instanceof HTMLButtonElement)
  elements.btnAtualizar?.addEventListener("click", anexarDadosApi);
