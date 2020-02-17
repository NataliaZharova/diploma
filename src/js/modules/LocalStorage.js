export class LocalStorage {
  constructor() {
    try {
      this._storage = window.localStorage;
    } catch (err) {
      alert("Нет доступа к локальному хранилищу.");
      throw err;
    }
    if (
      !this._storage ||
      !("setItem" in this._storage) ||
      !("getItem" in this._storage)
    ) {
      alert("Браузер не поддерживает локальное хранилище.");
      throw new Error();
    }
  }

  _write(key, val) {
    try {
      this._storage.setItem(key, JSON.stringify(val));
    } catch (err) {
      alert("Ошибка записи в локальное хранилище.");
      throw err;
    }
  }

  _read(key) {
    try {
      return JSON.parse(this._storage.getItem(key));
    } catch (err) {
      alert("Ошибка чтения из локального хранилища.");
    }
  }
}
