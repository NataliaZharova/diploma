const PAGE_SIZE = 3;

export class NewsCardList {
  constructor() {
    this._state = null;
    this._shownCount = NaN;
    this._cards = [];

    this._el = document.querySelector(".card-list");
    this._gridEl = this._el.querySelector(".card-list__grid");
    this._renderPageBtnEl = this._el.querySelector(".card-list__render-page");

    this._setHandlers();
  }

  _setHandlers() {
    this._renderPageBtnEl.addEventListener("click", () => this._renderPage());
  }

  _setState(state) {
    if (this._state) {
      this._el.classList.remove(`card-list_state_${this._state}`);
    }
    this._el.classList.add(`card-list_state_${state}`);
    this._state = state;
  }

  _renderPage() {
    const n = this._shownCount;
    const page = this._cards.slice(n, n + PAGE_SIZE).map(o => o.getElement());
    this._gridEl.append(...page);
    this._shownCount += PAGE_SIZE;
    if (this._cards.length <= this._shownCount) {
      this._el.classList.add("card-list_fully-drawn");
    } else {
      this._el.classList.remove("card-list_fully-drawn");
    }
  }

  startLoading() {
    this._setState("loading");
  }

  showFailure() {
    this._setState("failure");
  }

  populate(cards) {
    this._cards = cards;
    this._shownCount = 0;
    this._gridEl.innerHTML = "";
    if (cards.length) {
      this._renderPage();
      this._setState("ready");
    } else {
      this._setState("not-found");
    }
  }
}
