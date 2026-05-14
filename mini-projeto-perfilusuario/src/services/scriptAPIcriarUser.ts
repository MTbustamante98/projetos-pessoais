import type { UserProfile } from "../interfaces/dados.interface.js";
import { ApiTypeGuard } from "../services/apiTypeGuard.js";
import { API_CONFIG } from "../configs/randomUserApi.js";

export const fetchData = async function (): Promise<
  ReturnType<typeof puxarDados> | undefined
> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}`);

    if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);

    const jsonData = (await response.json()) as UserProfile;
    if (ApiTypeGuard(jsonData)) {
      return puxarDados(jsonData);
    } else {
      console.error("Os dados chegaram, mas o TypeGuard os rejeitou");
    }
  } catch (e) {
    console.error("Erro no processamento da API", e);
  }
};

export function puxarDados(dados: UserProfile) {
  return {
    gender: dados.results[0].gender,
    name: {
      firstName: dados.results[0].name.first,
      lastName: dados.results[0].name.last,
    },
    email: dados.results[0].email,
    location: {
      city: dados.results[0].location.city,
      country: dados.results[0].location.country,
    },
    picture: dados.results[0].picture.large,
  };
}
