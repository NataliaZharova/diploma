export class LocalStorage {
  _write(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  _read(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
