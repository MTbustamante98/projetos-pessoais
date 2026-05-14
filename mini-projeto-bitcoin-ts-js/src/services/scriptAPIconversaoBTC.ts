import { API_CONFIG } from "../config/awesomeApi.js";
import type { CryptoResponse } from "interfaces/dados.interface.js";
import { ApiTypeGuard } from "../services/apiTypeGuard.js";

export const fetchData = async function (): Promise<
  ReturnType<typeof puxarDados> | undefined
> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}`);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const jsonDATA = (await response.json()) as CryptoResponse;
    if (ApiTypeGuard(jsonDATA)) {
      return puxarDados(jsonDATA);
    } else {
      console.error("Os dados chegaram, mas o TypeGuard os rejeitou");
    }
  } catch (e) {
    console.error("Erro no processamento da API", e);
  } 
};

export function puxarDados(dados: CryptoResponse) {
  return {
    code: dados?.BTCBRL.code,
    bid: dados?.BTCBRL.bid,
    createDate: dados?.BTCBRL.create_date,
  };
}
