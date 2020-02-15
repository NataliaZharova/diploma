import { cloneDate } from "../utils/date/clone-date";

export class NewsApi {
  constructor(apiHost, daysCount, articlesLimit, apiKey) {
    this._apiHost = apiHost;
    this._daysCount = daysCount;
    this._articlesLimit = articlesLimit;
    this._apiKey = apiKey;
  }

  async getNews(query) {
    const to = new Date();
    const from = cloneDate(to);
    from.setDate(to.getDate() - this._daysCount);
    const url =
      `${this._apiHost}/v2/everything?` +
      `q=${query}&` +
      "language=ru&" +
      `from=${from.toISOString()}&` +
      `to=${to.toISOString()}&` +
      `pageSize=${this._articlesLimit}&` +
      `apiKey=${this._apiKey}`;
    const res = await fetch(url);
    return res.json();
  }
}
