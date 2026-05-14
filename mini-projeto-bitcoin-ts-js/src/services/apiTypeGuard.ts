import type { CryptoResponse } from "interfaces/dados.interface.js";

function isObject(dados: unknown): dados is Record<string, unknown> {
  return typeof dados === "object" && dados !== null;
}

export function ApiTypeGuard(dados: unknown): dados is CryptoResponse {
  if (!isObject(dados)) return false;

  if (
    "BTCBRL" in dados &&
    isObject(dados["BTCBRL"]) &&
    "code" in dados["BTCBRL"] &&
    typeof (dados["BTCBRL"] as Record<string, unknown>).code === "string" &&
    "bid" in dados["BTCBRL"] &&
    typeof (dados["BTCBRL"] as Record<string, unknown>).bid === "string" &&
    "create_date" in dados["BTCBRL"] &&
    typeof (dados["BTCBRL"] as Record<string, unknown>).create_date === "string"
  ) {
    return true;
  } else {
    return false;
  }
}
