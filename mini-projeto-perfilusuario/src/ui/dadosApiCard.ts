import { puxarDados } from "services/scriptAPIcriarUser.js";
import { elements } from "../ui/elements.js";

function isMaleOrFemale(value: unknown) {
  const isMale = value === "male";

  elements.CardBox?.classList.toggle("activeMale", isMale);
  elements.CardBox?.classList.toggle("activeFemale", !isMale);
}

function userNamePerfilInnerText(valueFirst: unknown, valueLast: unknown) {
  if (elements.UsuarioNameFirst && elements.UsuarioNameLast) {
    elements.UsuarioNameFirst.innerText = `${valueFirst}`;
    elements.UsuarioNameLast.innerText = `${valueLast}`;
  }
}

function userLocationPerfilInnerText(
  valueCity: unknown,
  valueCountry: unknown,
) {
  if (elements.UsuarioLocationCity && elements.UsuarioLocationCountry) {
    elements.UsuarioLocationCity.innerText = `${valueCity}`;
    elements.UsuarioLocationCountry.innerText = `${valueCountry}`;
  }
}

export function mostrarDadosNaTela(
  dados: ReturnType<typeof puxarDados> | undefined,
) {
  if (
    !elements.btnCriarUsuario ||
    !elements.UsuarioEmail ||
    !elements.imgUsuarioPreview
  )
    throw new Error("Elementos essenciais não encontrados.");

  isMaleOrFemale(dados?.gender);
  userNamePerfilInnerText(dados?.name.firstName, dados?.name.lastName);
  userLocationPerfilInnerText(dados?.location.city, dados?.location.country);

  elements.imgUsuarioPreview.src = `${dados?.picture}`;
  elements.UsuarioEmail.innerText = `${dados?.email}`;
}
