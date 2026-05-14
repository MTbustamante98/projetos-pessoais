import { API_CONFIG } from "../config/awesomeApi.js";
import { ApiTypeGuard } from "../services/apiTypeGuard.js";
export const fetchData = async function () {
    try {
        const response = await fetch(`${API_CONFIG.BASE_URL}`);
        if (!response.ok)
            throw new Error(`Erro HTTP: ${response.status}`);
        const jsonDATA = (await response.json());
        if (ApiTypeGuard(jsonDATA)) {
            return puxarDados(jsonDATA);
        }
        else {
            console.warn("Os dados chegaram, mas o TypeGuard os rejeitou");
        }
    }
    catch (e) {
        console.error("Erro no processamento da API", e);
    }
};
export function puxarDados(dados) {
    return {
        code: dados?.BTCBRL.code,
        bid: dados?.BTCBRL.bid,
        createDate: dados?.BTCBRL.create_date,
    };
}
