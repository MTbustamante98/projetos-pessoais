import { elements } from "../ui/elements.js";
import { fetchData } from "../services/scriptAPIcriarUser.js";
import { mostrarDadosNaTela } from "../ui/dadosApiCard.js";

const dados = await fetchData();
mostrarDadosNaTela(dados);

async function atualizarDados() {
  try {
    const dados = await fetchData();
    console.log(dados)
    mostrarDadosNaTela(dados);
  } catch (e) {
    console.error("Erro no processamento dos dados", e);
  }
}

if (elements.btnCriarUsuario)
  elements.btnCriarUsuario?.addEventListener("click", atualizarDados);
