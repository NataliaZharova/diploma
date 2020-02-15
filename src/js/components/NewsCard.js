import { formatDate } from "../utils/format/format-date";

export class NewsCard {
  constructor(newsArticle) {
    const {
      url,
      urlToImage,
      title,
      publishedAt,
      description,
      source: { name: source }
    } = newsArticle;

    const tpl = document.getElementById("news-card");

    this._el = tpl.content.cloneNode(true);
    this._cardEl = this._el.querySelector(".news-card");
    this._imageEl = this._el.querySelector(".news-card__image");
    this._dateEl = this._el.querySelector(".news-card__date");
    this._titleEl = this._el.querySelector(".news-card__title");
    this._textEl = this._el.querySelector(".news-card__text");
    this._sourceEl = this._el.querySelector(".news-card__source");

    this._cardEl.href = url;
    if (urlToImage) {
      this._imageEl.src = urlToImage;
      this._imageEl.alt = title;
    }
    this._dateEl.textContent = formatDate(new Date(publishedAt));
    this._titleEl.textContent = title;
    this._textEl.textContent = description;
    this._sourceEl.textContent = source;
  }

  getElement() {
    return this._el;
  }
}
