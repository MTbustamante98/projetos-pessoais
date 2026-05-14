export function isObject(value) {
    return typeof value == "object" && value !== null;
}
export function verificarPropName(name) {
    if (!isObject(name))
        return false;
    const verificarPropName = name;
    if (typeof verificarPropName.first !== "string" ||
        typeof verificarPropName.last !== "string") {
        return false;
    }
    return true;
}
export function verificarPropLocation(location) {
    if (!isObject(location))
        return false;
    const verificarPropLocation = location;
    if (typeof verificarPropLocation.city !== "string" ||
        typeof verificarPropLocation.country !== "string") {
        return false;
    }
    return true;
}
export function verificarPropPicture(picture) {
    if (!isObject(picture))
        return false;
    const verificarPropPicture = picture;
    return typeof verificarPropPicture.large !== "string";
}
export function isUserProfileItem(item) {
    if (!isObject(item))
        return false;
    const valueRecord = item.results;
    const propsObrigatorias = ["gender", "email"];
    for (const prop of propsObrigatorias) {
        if (!(typeof valueRecord[prop] === "string"))
            return false;
    }
    if (!verificarPropName(item.name))
        return false;
    if (!verificarPropLocation(item.location))
        return false;
    if (!verificarPropPicture(item.picture))
        return false;
    return true;
}
export function ApiTypeGuard(value) {
    if (!isObject(value) || !("results" in value))
        return false;
    if (!Array.isArray(value.results))
        return false;
    if (value.results.length === 0)
        return false;
    if ("name" in value.results[0] &&
        "location" in value.results[0] &&
        "picture" in value.results[0]) {
        return true;
    }
    return value.results.every((item) => isUserProfileItem(item));
}
