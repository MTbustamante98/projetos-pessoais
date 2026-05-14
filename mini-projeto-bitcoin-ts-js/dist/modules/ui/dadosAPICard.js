import { elements } from "../ui/elements.js";
export function mostrarLoading() {
    if (!elements.paragraphCard || !elements.btnAtualizar)
        return;
    elements.btnAtualizar.disabled = true;
    elements.btnAtualizar.innerText = "Carregando...";
    elements.btnAtualizar.classList.add("active");
    elements.paragraphCard.innerText = "Carregando...";
}
export function mostrarDadosNaTela(dados) {
    if (!elements.btnAtualizar || !elements.paragraphCard)
        throw new Error("Elementos essenciais não encontrados.");
    const btcFormatado = Number(dados?.bid).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    elements.paragraphCard.innerText = `${btcFormatado} BRL`;
    if (elements.dateCard)
        elements.dateCard.innerText = `${dados?.createDate}`;
    if (elements.btnAtualizar) {
        elements.btnAtualizar.disabled = true;
        elements.btnAtualizar.innerText = "Atualizar preço";
        elements.btnAtualizar.classList.remove("active");
    }
    elements.paragraphCard.classList.add("active");
}
