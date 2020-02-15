const ERR_EMPTY_QUERY = "Нужно ввести ключевое слово";

export class SearchInput {
  constructor(handlers) {
    this._formEl = document.querySelector(".search__form");
    this._inputEl = document.querySelector(".search__input");
    this._setHandlers(handlers);
  }

  _setHandlers([onSubmit]) {
    this._inputEl.addEventListener("invalid", () => {
      this._inputEl.setCustomValidity(ERR_EMPTY_QUERY);
    });
    this._inputEl.addEventListener("input", () => {
      this._inputEl.setCustomValidity("");
    });
    this._formEl.addEventListener("submit", ev => {
      ev.preventDefault();
      onSubmit(this._inputEl.value);
    });
  }
}
