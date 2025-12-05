export function setLocalStorage(key, item) {
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    console.error("Erro ao salvar!", e);
  }
}

export function getLocalStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error("Erro ao puxar item!", e);
  }
}
