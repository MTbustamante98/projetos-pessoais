import { UserProfile } from "../interfaces/dados.interface";

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function verificarPropName(
  name: unknown,
): name is { first: string; last: string } {
  if (!isObject(name)) return false;
  const verificarPropName = name as Record<string, unknown>;

  if (
    typeof verificarPropName.first !== "string" ||
    typeof verificarPropName.last !== "string"
  ) {
    return false;
  }

  return true;
}

export function verificarPropLocation(
  location: unknown,
): location is { city: string; country: string } {
  if (!isObject(location)) return false;
  const verificarPropLocation = location as Record<string, unknown>;

  if (
    typeof verificarPropLocation.city !== "string" ||
    typeof verificarPropLocation.country !== "string"
  ) {
    return false;
  }

  return true;
}

export function verificarPropPicture(
  picture: unknown,
): picture is { large: string } {
  if (!isObject(picture)) return false;
  const verificarPropPicture = picture as Record<string, unknown>;

  return typeof verificarPropPicture.large !== "string";
}

export function isUserProfileItem(
  item: unknown,
): item is UserProfile["results"][0] {
  if (!isObject(item)) return false;
  const valueRecord = item.results as Record<string, unknown>;

  const propsObrigatorias = ["gender", "email"];
  for (const prop of propsObrigatorias) {
    if (!(typeof valueRecord[prop] === "string")) return false;
  }

  if (!verificarPropName(item.name)) return false;
  if (!verificarPropLocation(item.location)) return false;
  if (!verificarPropPicture(item.picture)) return false;

  return true;
}

export function ApiTypeGuard(value: unknown): value is UserProfile {
  if (!isObject(value) || !("results" in value)) return false;

  if (!Array.isArray(value.results)) return false;

  if (value.results.length === 0) return false;

  if (
    "name" in value.results[0] &&
    "location" in value.results[0] &&
    "picture" in value.results[0]
  ) {
    return true;
  }

  return value.results.every((item) => isUserProfileItem(item));
}
