function isObject(dados) {
    return typeof dados === "object" && dados !== null;
}
export function ApiTypeGuard(dados) {
    if (!isObject(dados))
        return false;
    if ("BTCBRL" in dados &&
        isObject(dados["BTCBRL"]) &&
        "code" in dados["BTCBRL"] &&
        typeof dados["BTCBRL"].code === "string" &&
        "bid" in dados["BTCBRL"] &&
        typeof dados["BTCBRL"].bid === "string" &&
        "create_date" in dados["BTCBRL"] &&
        typeof dados["BTCBRL"].create_date === "string") {
        return true;
    }
    else {
        return false;
    }
}
